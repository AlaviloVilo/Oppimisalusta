import Course from "../models/course.js";

export const getAllCourses = async (req, res) => {
    try{
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err){
        res.status(500).json({message: err.message});
    }
}

export const getCourseById = async (req, res) => {
    try {
      console.log('got request for course by id')
      const course = await Course.findById(req.params.id);
      if (!course) {
        return res.status(404).json({ message: 'Course not found' });
      }
      else{
        console.log('this is course:', course);
        res.status(200).json(course);
      }
     
    } catch (err) {
      console.error('Error fetching course:', err);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
