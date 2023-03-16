import { BorrowedBook } from "../interfaces/borrowed-book.interface";
import { returnBorrowedBookData } from "../interfaces/return-borrowed-book.interface";
import { BookModel } from "../models/Book";
import { BookCopiesModel } from "../models/BookCopies";
import { BorrowedBookModel } from "../models/BorrowedBook";
import { ClientModel } from "../models/Client";

const checkBookAvailability = async (bookId: number) => {
  const copies = await BookCopiesModel.findAll({
    where: { idBook: bookId, available: true },
  });
  return copies.length > 0;
};

const newBorrowedBook = async (borrowedBook: BorrowedBook) => {
  try {
    const createBorrowedBook = await BorrowedBookModel.create(borrowedBook);
    await BookCopiesModel.update(
      { available: false },
      { where: { idBook: borrowedBook.bookId } }
    );
    return createBorrowedBook;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating book and book copy");
  }
};

const getAllBorrowedBooks = async () => {
  const responseBorrowedBooks = await BorrowedBookModel.findAll({
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: ClientModel,
        as: "user",
        attributes: ["name", "lastname", "email"],
      },
      {
        model: BookModel,
        as: "book",
        attributes: ["title", "author"],
      },
    ],
  });
  return responseBorrowedBooks;
};

const deleteBorrowedBookById = async (id: string) => {
  const responseBook = await BorrowedBookModel.destroy({
    where: {
      id,
    },
  });
  return responseBook;
};

const returnBorrowedBook = async (id: string, data: returnBorrowedBookData) => {
  const bookCopy = await BookCopiesModel.findOne({
    where: { idBook: data.bookId },
  });
  const borrowedBook = await BorrowedBookModel.findOne({ where: { id: id } });

  if (
    bookCopy &&
    borrowedBook &&
    borrowedBook.dataValues.returnStatus === "pending"
  ) {
    const now = new Date();
    const borrowDate = new Date(borrowedBook.dataValues.borrowDate);
    if (now >= borrowDate) {
      await bookCopy.update({ available: data.available });
      const borrowedBookResponse = await borrowedBook.update({
        returnStatus: "returned",
        returnDate: now,
      });
      return borrowedBookResponse;
    } else {
      throw new Error(
        "La fecha de devolución es antes de la fecha de prestamo."
      );
    }
  } else {
    throw new Error(
      "Libro copia o libro prestado no encontrado, o libro ya devuelto"
    );
  }
};

export {
  checkBookAvailability,
  newBorrowedBook,
  getAllBorrowedBooks,
  deleteBorrowedBookById,
  returnBorrowedBook,
};
