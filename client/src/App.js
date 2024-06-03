import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavHeader';
import Footer from './components/Footer';
import Home from './components/Home';
import PetList from './components/PetList';
import PetDetail from './components/PetDetail';
import UserProfile from './components/UserProfile';
import SignUp from './components/SignUp';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/pets/:id" element={<PetDetail />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
