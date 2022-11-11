import express from 'express';
import connectDB from './config/db.js';
import postRouter from './routes/postRouter.js';
const app = express();
const port = 3000;

connectDB();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use("/", postRouter);

app.listen(3000, console.log('Server is runnig on 3000'));