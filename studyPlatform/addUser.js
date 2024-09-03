import connectDB from './connectDB.js';
import User from './src/models/user.js'; // Adjust the path if necessary
import pkg from 'mongoose';
import { getAllUsers } from './src/controllers/userController.js';
const { connection } = pkg;


const addUser = async () => {
  await connectDB();

  const newUser = new User({
    firstName: 'Medium',
    lastName: 'Matt',
    email: 'medukka.matukka@dandyman.com',
    profilePic: 'https://plus.unsplash.com/premium_vector-1711987502039-f12a236104b2?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
    commenting: true,
    isTeacher: true,
    darkTheme: false
  });

  try {
    await newUser.save();
    console.log('User added:', newUser);

    const users = await getAllUsers();
    console.log('users:', users)
    
  } catch (err) {
    console.error('Error adding user:', err.message);
  } finally {
    connection.close();
  }
};

addUser();
