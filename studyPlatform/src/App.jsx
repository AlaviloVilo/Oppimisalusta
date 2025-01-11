import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UserScreen from './frontend/views/UserScreen'
import Footer from './frontend/components/footer'
import NavigationBar from './frontend/components/NavigationBar';
import Home from './frontend/views/Home';
import LoginScreen from './frontend/views/LoginScreen';
import RegisterScreen from './frontend/views/RegisterScreen';
import Courses from './frontend/views/Courses';
import Notes from './frontend/views/Notes';
import MyCourses from './frontend/views/MyCourses';



function App() {
  return (
    <Router>
      <NavigationBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<UserScreen />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App
