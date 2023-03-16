import { Router } from "express";
import {
  getBookCopies,
  getAvailableBookCopies,
  getAvailableBookCopiesById,
  updateBookCopies,
  deleteBookCopies
} from "../controllers/books-copies.controller";

const router = Router();

router.get("/", getBookCopies);
router.get('/availables', getAvailableBookCopies);
router.get('/:id', getAvailableBookCopiesById);
router.put('/:id', updateBookCopies);
router.delete('/:id', deleteBookCopies);


export { router };
