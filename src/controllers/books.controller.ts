import { Request, Response, NextFunction } from "express";
import {
  newBook,
  getBookById,
  getBooksByQuery,
  getAllBooks,
  updateBookById,
  deleteBookById,
} from "../services/books.service";
import { handleHttp } from "../utils/error.handle";
import multer, { FileFilterCallback } from "multer";
import shortid from "shortid";


const getBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getBookById(id);
    const data = response ? response : { msg: "NOT FOUND" };
    res.json(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_BOOK", error);
    console.log(error);
  }
};

const getBooks = async (req: Request, res: Response) => {
  try {
    const response = await getAllBooks();
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_BOOKS", error);
  }
};

const searchBook = async (req: Request, res: Response) => {
  try {
    const { query } = req.query; 
    let responseSearchResult ;
    if (query && typeof query === "string") {
        responseSearchResult = await getBooksByQuery(query);
    } else {
      responseSearchResult = await getAllBooks();
    }
    res.json(responseSearchResult);
  } catch (error) {
    console.error(error);
    handleHttp(res, "ERROR_SEARCH_BOOK", error);
  }
};

const createBook = async (req: Request, res: Response, next: NextFunction) => {
  const imgUrl = "http://localhost:5000"
  const data = req.body;
  if (req.file) {
    req.body.image = `${imgUrl}/${req.file.filename}`;
  }
  try {
    const responseBook = await newBook(req.body);
    res.json(responseBook);
  } catch (error) {
    console.log(error);
    console.log(req.body);

    handleHttp(res, "ERROR_CREATE_BOOK", error);
  }
};

const updateBook = async (req: Request, res: Response) => {
  const imgUrl = "http://localhost:5000"
  const data = req.body;
  if (req.file) {
    req.body.image = `${imgUrl}/${req.file.filename}`;
  }
  try {
    const { id } = req.params;
    const response = await updateBookById(id, req.body);
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_BOOK", error);
  }
};

const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteBookById(id);
    res.json(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_BOOK", error);
  }
};

export { getBook, getBooks, createBook, deleteBook, updateBook, searchBook };
