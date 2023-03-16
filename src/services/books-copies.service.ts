import { BookCopiesModel } from "../models/BookCopies";
import { BookCopies } from "./../interfaces/book-copies.interface";

const getAllBookCopies = async () => {
  const responseBookCopies = await BookCopiesModel.findAll();
  return responseBookCopies;
};

const getAllAvailableBooksCopies = async () => {
  const responseBookCopies = await BookCopiesModel.findAll({
    where: {
      available: true,
    },
  });
  return responseBookCopies;
};

const getOneAvailableBookCopiesById = async (idBook: string) => {
  const responseBookCopies = await BookCopiesModel.findAll({
    where: {
      idBook,
      available: true,
    },
  });
  return responseBookCopies;
};

const updateBookCopiesById = async (id: string, data: BookCopies) => {
  const [, updateBookResponse] = await BookCopiesModel.update(data, {
    where: {
      id,
    },
    returning: true,
  });
  return updateBookResponse;
};

const deleteBookCopiesById = async (id: string) => {
  const responseBook = await BookCopiesModel.destroy({
    where: {
      id,
    },
  });
  return responseBook;
};

export {
  getAllBookCopies,
  getAllAvailableBooksCopies,
  getOneAvailableBookCopiesById,
  updateBookCopiesById,
  deleteBookCopiesById,
};
