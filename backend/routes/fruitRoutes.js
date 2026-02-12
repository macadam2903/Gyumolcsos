import express from 'express';
import * as fruitController from '../controllers/fruitController.js';

const router = express.Router();

router.get('/', fruitController.getAllFruits);
router.get('/:id', fruitController.getFruitById);
router.post('/', fruitController.createFruit);
router.put('/:id', fruitController.updateFruit);
router.delete('/:id', fruitController.deleteFruit);

export default router;