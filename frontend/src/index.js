import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';

// Import the components
import SignIn from './components/SignIn';
import ChooseRole from './components/ChooseRole';
import SignUp from './components/SignUp';
import JoinClass from './components/JoinClass';
import AboutUs from './components/AboutUs';
import Assignment from './components/Assignment';
import Chat from './components/Chat';
import Dashboard from './components/Dashboard';
import Friends from './components/Friends';
import Profile from './components/Profile';
import Resources from './components/Resources';
import TasksOfTheDay from './components/TasksOfTheDay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" />} />
      <Route path="/choose-role" element={<ChooseRole />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/join-class" element={<JoinClass />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/assignment" element={<Assignment />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/tasks-of-the-day" element={<TasksOfTheDay />} /> {/* Add other routes as needed */}
    </Routes>
  </Router>
);
