import { Router } from 'express';
import { getCarData } from '../controllers/car.controller';

const router = Router();

router.get('/', getCarData);

export default router;
