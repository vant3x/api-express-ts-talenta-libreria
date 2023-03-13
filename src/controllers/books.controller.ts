import { Request, Response, NextFunction } from "express";
import { newBook, getBookById, getAllBooks, updateBookById, deleteBookById } from "../services/books.service";
import { handleHttp } from "../utils/error.handle";

const getBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await getBookById(id);
        const data = response ? response : {msg: 'NOT FOUND'};
        res.json(data);
    } catch (error) {
       handleHttp(res, 'ERROR_GET_CAR', error);
       console.log(error)
    }
}

const getBooks = async (req: Request, res: Response) => {
    try {
        const response = await getAllBooks()
        res.json(response);

    } catch (error) {
       handleHttp(res, 'ERROR_GET_CARS', error);
    }
}

const createBook = async (req: Request, res: Response, next: NextFunction ) => {
    try {
        const responseBook = await newBook(req.body);
        res.json(responseBook);
    } catch (error) {
        console.log(error)

       handleHttp(res, 'ERROR_CREATE_BOOK', error);
    }
}

const updateBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await updateBookById(id, req.body);
        res.json(response);
    } catch (error) {
       handleHttp(res, 'ERROR_UPDATE_CAR', error);
    }
}

const deleteBook = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const response = await deleteBookById(id);
        res.json(response);
    } catch (error) {
       handleHttp(res, 'ERROR_DELETE_CAR', error);
    }
}

export { getBook, getBooks, createBook, deleteBook, updateBook };