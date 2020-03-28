import { Router } from 'express';
const fs = require('fs');

export const router = Router();

/**
 * Get a list of asks
 */
router.get("/", (req, res, next) => {
  const rawdata = fs.readFileSync('src/routes/asks/testData.json');
  const askList = JSON.parse(rawdata);

  res.send({
    asks: askList
  });
});
