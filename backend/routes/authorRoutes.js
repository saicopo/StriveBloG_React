import express from 'express';
import {createAuthor, deleteAuthor, getAllAuthors, getAuthorById,putAuthor} from '../controllers/authorController.js';

const router = express.Router();

router.get('/',getAllAuthors)
router.get('/:id',getAuthorById)
router.post('/new',createAuthor)
router.put('/:id',putAuthor)
router.delete('/:id',deleteAuthor)
export { router }