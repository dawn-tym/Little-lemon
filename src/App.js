import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import BookingPage from './BookingPage';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
      <Router> {/* Wrap everything inside Router */}
          <Header />
          <Routes>
              <Route path="/Reservations" element={<BookingPage />} />
          </Routes>
          <Main />
          <Footer />
      </Router>
  );
}

export default App;
