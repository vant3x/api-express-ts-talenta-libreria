import { Router } from "express";
import {
  checkBookAvailabilityController,
  createBorrowedBook,
  getBorrowedBooks,
  deleteBook,
  updateAndReturnBorrowedBook
} from "../controllers/borrowed-books.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get("/check-book-availability/:id", checkBookAvailabilityController);
router.post("/new-borrowed-book", checkJwt, createBorrowedBook);
router.get("/", checkJwt, getBorrowedBooks);
router.delete("/delete/:id", checkJwt, deleteBook);
router.put("/return-borrowed-book/:id", checkJwt, updateAndReturnBorrowedBook);

export { router };
