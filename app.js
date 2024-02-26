import express from 'express';
import cookieParser from 'cookie-parser';

import ordersRouter from './src/routes/orders.router.js';

const app = express();
const PORT = 3018;

app.use(express.json());
app.use(cookieParser());

app.use('/orders', ordersRouter);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
