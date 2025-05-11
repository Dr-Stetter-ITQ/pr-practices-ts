import { Router } from 'express';
import { get } from '../controllers/laps.controller';

const router = Router();

router.get('/', get);

export default router;
