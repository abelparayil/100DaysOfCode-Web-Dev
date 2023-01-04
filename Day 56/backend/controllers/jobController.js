import Job from '../models/JobModel.js';

export const getJobs = async (req, res) => {
	try {
		const jobs = await Job.find({});
		res.status(201).json({ success: true, count: jobs.length, data: jobs });
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
};

export const getJob = async (req, res) => {
	try {
		const { slug } = req.params;
		if (slug) {
			const job = await Job.findOne({ slug });
			res.status(201).json({ success: true, data: job });
		}
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
};

export const createJob = async (req, res) => {
	try {
		const jobsSave = new Job({
			title: req.body.title,
			description: req.body.description,
			location: req.body.location,
			salary: req.body.salary,
			email: req.body.email,
		});
		await jobsSave.save();
		res.status(201).json({ success: true, data: jobsSave });
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
};

export const updateJob = async (req, res) => {
	try {
		const { id } = req.params;
		if (id) {
			const job = await Job.findByIdAndUpdate(id, req.body, {
				new: true,
			});
			res.status(201).json({ success: true, data: job });
		}
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
};

export const deleteJob = async (req, res) => {
	try {
		const { id } = req.params;
		if (id) {
			await Job.findByIdAndDelete(id);
			res.status(201).json({ success: true, data: {} });
		}
	} catch (error) {
		res.status(401).json({ success: false, message: error.message });
	}
};
