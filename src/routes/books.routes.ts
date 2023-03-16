import { Router } from "express";
import { getBook, getBooks, createBook, updateBook, deleteBook, searchBook  } from "../controllers/books.controller";
import {  uploadFile } from "../controllers/upload.controller";

const router = Router();

router.get('/', getBooks);
router.get('/search', searchBook);
router.get('/:id', getBook);
router.post('/', uploadFile, createBook);
router.put('/:id', uploadFile, updateBook);
router.delete('/:id', deleteBook);

export { router }       