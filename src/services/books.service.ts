import { BookModel } from "../models/Book";
import { Book } from './../interfaces/book.interface';

const newBook = async (book: Book) => {
    const responseNew = await BookModel.create(book);
    return responseNew;
};

const getBookById = async (id: string) => {
    const responseBook = await BookModel.findOne({
        where: {
            id
        }
    });
    return responseBook;
}

const getAllBooks = async () => {
    const responseBooks = await BookModel.findAll();
    return responseBooks;
}

const updateBookById = async (id: string, data: Book) => {
    const [, updateBookResponse]  = await BookModel.update(data,  {
        where: {
            id
        },
        returning: true
    });
    return updateBookResponse;
}


const deleteBookById = async (id: string) => {
    const responseBook = await BookModel.destroy({
        where: {
            id
        }
    });
    return responseBook;
}

export { newBook, getBookById, getAllBooks, updateBookById, deleteBookById };
