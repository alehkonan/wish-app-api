import 'dotenv/config';
import express from 'express';
import { spheresRouter } from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  return next();
});
app.use(express.json());
app.use('/api', spheresRouter);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`App listenning at http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(`DB error: ${(e as Error).message}`);
    process.exit(1);
  }
};

start();
