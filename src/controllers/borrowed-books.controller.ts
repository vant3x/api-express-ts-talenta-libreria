import { Request, Response, NextFunction } from "express";
import { parse } from "path";
import {
  checkBookAvailability,
  newBorrowedBook,
  getAllBorrowedBooks,
  deleteBorrowedBookById,
  returnBorrowedBook
} from "../services/borrowed-books.service";
import { handleHttp } from "../utils/error.handle";

const checkBookAvailabilityController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await checkBookAvailability(parseInt(id));
    const data = response ? response : false;
    res.json(data);
  } catch (error) {
    handleHttp(res, "ERROR_CHECKING_BOOK_AVAILIBILITY", error);
    console.log(error);
  }
};

const createBorrowedBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const responseBorrowedBook = await newBorrowedBook(req.body);
    res.json(responseBorrowedBook);
  } catch (error) {
    console.log(error);
    console.log(req.body);
    handleHttp(res, "ERROR_CREATE_BORROWED_BOOK", error);
  }
};

const getBorrowedBooks = async (req: Request, res: Response) => {
  try {
    const response = await getAllBorrowedBooks();
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_BORROWED_BOOKS", error);
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteBorrowedBookById(id);
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_BOOK", error);
  }
};

const updateAndReturnBorrowedBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const response = await returnBorrowedBook(id, req.body);
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_RETURN_AND_UPDATE_BORROWED_BOOK", error);
  }
}

export {
  checkBookAvailabilityController,
  createBorrowedBook,
  getBorrowedBooks,
  deleteBook,
  updateAndReturnBorrowedBook
};
