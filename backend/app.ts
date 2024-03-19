import express, { Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import userRouter from './src/routes/userRoutes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cors());

app.get('/', (_, res: Response) => {
  res.json({
    message: 'Welcome to backend , Lets gets started',
  });
});
app.get('/health', (_, res: Response) => {
  res.send({
    message: 'health OK!',
  });
});

app.use('/api/user', userRouter);

export { app };
