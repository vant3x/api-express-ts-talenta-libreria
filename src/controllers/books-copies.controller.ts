import { Request, Response, NextFunction } from "express";
import {
  getAllBookCopies,
  getAllAvailableBooksCopies,
  getOneAvailableBookCopiesById,
  updateBookCopiesById,
  deleteBookCopiesById
} from "../services/books-copies.service";
import { handleHttp } from "../utils/error.handle";

const getBookCopies = async (req: Request, res: Response) => {
  try {
    const response = await getAllBookCopies();
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_BOOKS_COPIES", error);
    console.log(error);
  }
};

const getAvailableBookCopies = async (req: Request, res: Response) => {
  try {
    const response = await getAllAvailableBooksCopies();
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_AVAILABLE_BOOKS_COPIES", error);
    console.log(error);
  }
};

const getAvailableBookCopiesById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getOneAvailableBookCopiesById(id);
    const data = response ? response : { msg: "NOT FOUND" };
    res.json(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_AVAILABLE_BOOK_COPIES", error);
    console.log(error);
  }
};

const updateBookCopies = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await updateBookCopiesById(id, req.body);
        res.json(response);
    } catch (error) {
       handleHttp(res, 'ERROR_UPDATE_BOOK_COPIES', error);
    }
};

const deleteBookCopies = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await deleteBookCopiesById(id);
        res.json(response);
    } catch (error) {
       handleHttp(res, 'ERROR_DELETE_BOOK_COPIES', error);
    }
};

export { getBookCopies, getAvailableBookCopies, getAvailableBookCopiesById, updateBookCopies, deleteBookCopies };