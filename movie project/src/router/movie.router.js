import express from 'express'
import { createMovie, deleteMovie, getMovie, updateMovie } from '../controller/movie.controller.js';

const router = express.Router();

router.route('/')
.post(createMovie)
.get(getMovie)

router.route('/:id')
.put(updateMovie)
.delete(deleteMovie)

export default router