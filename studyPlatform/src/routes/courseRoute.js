import express from 'express';
import { getAllCourses, getCourseById } from '../controllers/courseController.js';

const router = express.Router();

router.get('/courses', getAllCourses);

router.get('/courses/:id', getCourseById);

export default router;