import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database is connected');
    } catch (error) {
        console.log(error.message);
    }
};

export default connectDB;