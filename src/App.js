import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import BookingPage from './BookingPage';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home page */}
        <Route path="/home" element={<Main />} />

        {/* Reservations page */}
        <Route path="/reservations" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;