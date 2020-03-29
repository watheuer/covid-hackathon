import { Router } from 'express';
import { getAllAsksFromStorage, isValidAsk, upsertAsk, Ask, deleteAsk } from './ask';

export const router = Router();

/**
 * Get a list of asks
 */
router.get("/", (req, res, next) => {
  const askList = getAllAsksFromStorage();

  res.send({
    asks: askList
  });
});

/**
 * Post - Perform an upsert on the list of asks.
 */
router.post("/", (req, res, next) => {
  // Verify input (JSON ask object)
  if (!isValidAsk(req.body)) {
    res.status(400).send("Malformed ask");
    return;
  }
  // Return the updated/inserted object
  const resultAsk = upsertAsk(<Ask>req.body);
  res.send(resultAsk);
});

/**
 * Delete an entry from the list of asks
 */
router.delete("/", (req, res, next) => {
  // Verify input (id)
  if (req.query.id === undefined) {
    res.status(400).send("No id given for delete");
  }
  if (!deleteAsk(req.query.id)) {
    res.status(400).send(
        "Object with given id was not found");
  }
  // Return 200 on success
  res.status(200).send();
});