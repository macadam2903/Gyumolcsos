import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import fruitRoutes from './routes/fruitRoutes.js';
import arrivalRoutes from './routes/arrivalRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Gyümölcs API működik!' });
});

app.use('/fruits', fruitRoutes);
app.use('/arrivals', arrivalRoutes);

app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT}`);
});