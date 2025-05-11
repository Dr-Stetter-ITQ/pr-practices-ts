import { Router } from 'express';
import { getDrivers } from '../controllers/driver.controller';
import { getCarData } from '../controllers/car.controller';

const router = Router();

router.get('/', getCarData);

export default router;