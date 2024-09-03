import connectDB from './connectDB.js';
import Course from './src/models/course.js'; // Adjust the path if necessary
import pkg from 'mongoose';
import { getAllCourses } from './src/controllers/courseController.js';
import mongoose from 'mongoose';
const { connection } = pkg;

const studentId = new mongoose.Types.ObjectId('666efe4c606d100dd66c4381');
const teacherId = new mongoose.Types.ObjectId('6676855f5d6f0d388d2429bc');


const addCourse = async () => {
  await connectDB();

  const newCourse = new Course({
    courseName: "Mikrokontrollerit 1",
    courseKey: "mikro1",
    courseIdentifier: "MK124",
    coursePic: false,
    description: "Tällä kurssilla opitaan mikrokontrollerien rakenteista ja käyttötarkoituksista.",
    learningGoals: "Oppilas ymmärtää mikrokontrollerien perusteet ja osaa käyttää omien sovelluksien tekoon.",
    courseStudents: [studentId],
    author: [teacherId],
  });

  try {
    await newCourse.save();
    console.log('Course added:', newCourse);

    const courses = await getAllCourses();
    console.log('courses:', courses)
    
  } catch (err) {
    console.error('Error adding course:', err.message);
  } finally {
    connection.close();
  }
};

addCourse();
