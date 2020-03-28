import { Router } from 'express';
import { router as asksRouter } from './asks';

export const router = Router();

router.get('/', (req, res, next) => {
  res.send('ok');
});

router.use('/asks', asksRouter);
