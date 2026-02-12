import * as arrivalModel from '../models/arrivalModel.js';

export const getAllArrivals = async (req, res) => {
  try {
    const arrivals = await arrivalModel.getAll();
    res.json(arrivals);
  } catch (error) {
    res.status(500).json({ error: 'Szerver hiba' });
  }
};