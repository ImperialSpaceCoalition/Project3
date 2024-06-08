import React, { useState } from 'react';
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
import DogList from './components/DogList';
import CatList from './components/CatList';
import RabbitList from './components/RabbitList';
import FerretList from './components/FerretList';
import GuineaPigList from './components/GuineaPigList';
import HamsterGerbilList from './components/HamsterGerbilList';
import AvailablePets from './components/AvailablePets';

function App() {
  const [authenticated, setAuthenticated] = useState(false); // Define the setAuth function

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/dogs" element={<DogList />} />
        <Route path="/cats" element={<CatList />} />
        <Route path="/rabbits" element={<RabbitList />} />
        <Route path="/ferrets" element={<FerretList />} />
        <Route path="/guineapigs" element={<GuineaPigList />} />
        <Route path="/hamstersgerbils" element={<HamsterGerbilList />} />
        <Route path="/pets/:id" element={<PetDetail />} />
        <Route path="/profile" element={<UserProfile />} />
        {/* Pass the setAuth function as a prop to SignUp */}
        <Route path="/signup" element={<SignUp setAuth={setAuthenticated} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/availablepets" element={<AvailablePets />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

