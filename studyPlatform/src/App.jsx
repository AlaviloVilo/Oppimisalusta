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
import { Auth0Provider } from '@auth0/auth0-react';
import AuthCallback from './frontend/components/authcallBack';




function App() {
  return (
    <Auth0Provider domain={ import.meta.env.VITE_AUTH0_DOMAIN } clientId={ import.meta.env.VITE_AUTH0_CLIENT_ID } authorizationParams={{
      redirect_uri: window.location.origin + '/callback',
    }}>
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
            <Route path="/callback" element={<AuthCallback />} />
          </Routes>
        <Footer />
      </Router>
    </Auth0Provider>
  )
}

export default App
