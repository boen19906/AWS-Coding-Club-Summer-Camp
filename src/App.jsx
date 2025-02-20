import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componets/NavBar';
import Home from './componets/Home';
import MeetTheTeam from './componets/MeetTheTeam';
import SignUp from './componets/SignUp';
import Footer from './componets/Footer';
import About from './componets/About'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meet" element={<MeetTheTeam />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;