import { Op } from "sequelize";
import { BookModel } from "../models/Book";
import { BookCopiesModel } from "../models/BookCopies";
import { Book } from "./../interfaces/book.interface";

const newBook = async (book: Book) => {
  try {
    const createBook = await BookModel.create(book);
    await BookCopiesModel.create({
      idBook: createBook.get("id") as number,
      available: true,
    });
    return createBook;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating book and book copy");
  }
};

const getBookById = async (id: string) => {
  const responseBook = await BookModel.findOne({
    where: {
      id,
    },
  });
  return responseBook;
};

const getBooksByQuery = async (query: string) => {
  const searchResult = await BookModel.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.iLike]: `%${query}%` } }, // Buscamos por título
        { author: { [Op.iLike]: `%${query}%` } }, // Buscamos por autor
      ],
    },
  });
  return searchResult;
}

const getAllBooks = async () => {
  const responseBooks = await BookModel.findAll({
      order: [['createdAt', 'DESC']]
  });
  return responseBooks;
};

const updateBookById = async (id: string, data: Book) => {
  const [, updateBookResponse] = await BookModel.update(data, {
    where: {
      id,
    },
    returning: true,
  });
  return updateBookResponse;
};

const deleteBookById = async (id: string) => {
  const responseBook = await BookModel.destroy({
    where: {
      id,
    },
  });
  return responseBook;
};

export { newBook, getBookById, getBooksByQuery, getAllBooks, updateBookById, deleteBookById };
