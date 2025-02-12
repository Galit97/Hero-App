import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import cors from 'cors';
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// DB Connection
const dbUrl = process.env.DB_URL;
const database = 'Heros-App';

if (!dbUrl) {
  console.error('Error: DB_URL is not defined in environment variables.');
  process.exit(1);
}

mongoose
  .connect(`${dbUrl}/${database}`)
  .then(() => {
    console.info('DB connected');
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });

// Routes
import UsersRouter from './routes/users/usersRoutes';
import HerosRouter from './routes/heros/herosRoutes';
import RatingRouter from './routes/rating/ratingRoute';

app.use('/api/users', UsersRouter);
app.use('/api/heros', HerosRouter);
app.use('/api/ratings', RatingRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
