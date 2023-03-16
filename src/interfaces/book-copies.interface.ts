import { Book } from "./book.interface";

export interface  BookCopies {
    id?: number;
    idBook: number;
    available: boolean;
    book?: Book;
}