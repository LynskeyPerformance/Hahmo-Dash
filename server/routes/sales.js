import { getSales } from '../controllers/sales.js';
import express from 'express'

const router = express.Router();
router.get("/sales", getSales)
export default router; 