import connectDB from './connectDB.js';
import NewsCard from './src/models/newsCard.js'; // Adjust the path if necessary
import pkg from 'mongoose';
import { getAllNewsCards } from './src/controllers/newsCardController.js';
import { LocalFireDepartment } from '@mui/icons-material';
const { connection } = pkg;


const addNewsCard = async () => {
  await connectDB();

  const newNewsCard = new NewsCard({
    refCourse: null,
    newsTitle: 'For Testing!!',
    message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quia aperiam ipsam placeat beatae modi? Fugit odit iusto deserunt facere cumque sint animi eius nostrum vel, magnam exercitationem repellat? Ut?",
    date: new Date(),
    author: "Mr. CEO"
  });

  try {
    await newNewsCard.save();
    console.log('new News added:', newNewsCard);

    const newsCards = await getAllNewsCards();
    console.log('newsCards:', newsCards)
    
  } catch (err) {
    console.error('Error adding newsCard:', err.message);
  } finally {
    connection.close();
  }
};

addNewsCard();