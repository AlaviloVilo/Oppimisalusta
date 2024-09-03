import express from 'express';
import { getAllNewsCards, getNewsCardById } from '../controllers/newsCardController.js';

const router = express.Router();

router.get('/newsCards', getAllNewsCards);

router.get('/newsCards/:id', getNewsCardById);

export default router;