import * as fruitModel from '../models/fruitModel.js';

export const getAllFruits = async (req, res) => {
  try {
    const fruits = await fruitModel.getAll();
    res.json(fruits);
  } catch (error) {
    console.error('Hiba a gyümölcsök lekérdezésekor:', error);
    res.status(500).json({ error: 'Szerver hiba' });
  }
};

export const getFruitById = async (req, res) => {
  try {
    const fruit = await fruitModel.getById(req.params.id);
    if (!fruit) return res.status(404).json({ error: 'Gyümölcs nem található' });
    res.json(fruit);
  } catch (error) {
    console.error('Hiba a gyümölcs lekérdezésekor:', error);
    res.status(500).json({ error: 'Szerver hiba' });
  }
};

export const createFruit = async (req, res) => {
  try {
    const { nev, alt_szoveg, src } = req.body;

    if (!nev || !alt_szoveg || !src)
      return res.status(400).json({ error: 'Kötelező mezők hiányoznak' });

    const insertId = await fruitModel.create(req.body);
    res.status(201).json({ message: 'Gyümölcs sikeresen hozzáadva', gyumolcsid: insertId });
  } catch (error) {
    console.error('Hiba a gyümölcs hozzáadásakor:', error);
    if (error.code === 'ER_DUP_ENTRY')
      return res.status(400).json({ error: 'Ez a gyümölcs már létezik' });
    res.status(500).json({ error: 'Szerver hiba' });
  }
};

export const updateFruit = async (req, res) => {
  try {
    const { id } = req.params;
    const exists = await fruitModel.getById(id);
    if (!exists) return res.status(404).json({ error: 'Gyümölcs nem található' });

    await fruitModel.update(id, req.body);
    res.json({ message: 'Gyümölcs sikeresen frissítve' });
  } catch (error) {
    console.error('Hiba a gyümölcs frissítésekor:', error);
    if (error.code === 'ER_DUP_ENTRY')
      return res.status(400).json({ error: 'Ez a gyümölcs név már foglalt' });
    res.status(500).json({ error: 'Szerver hiba' });
  }
};

export const deleteFruit = async (req, res) => {
    try {
      const { id } = req.params;
  
      const exists = await fruitModel.getById(id);
      if (!exists) return res.status(404).json({ error: 'Gyümölcs nem található' });
  
      await fruitModel.deleteArrivalsByFruit(id);
  
      await fruitModel.forceDelete(id);
  
      res.json({ message: 'Gyümölcs sikeresen törölve' });
    } catch (error) {
      console.error('Hiba a gyümölcs törlésekor:', error);
      res.status(500).json({ error: 'Szerver hiba' });
    }
  };