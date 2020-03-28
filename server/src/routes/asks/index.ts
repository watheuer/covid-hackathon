import { Router } from 'express';

export const router = Router();

/**
 * Get a list of asks
 */
router.get("/", (req, res, next) => {
  res.send({
    asks: ['plz send masks', 'some other shit']
  });
});
