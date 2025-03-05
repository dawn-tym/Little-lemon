import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import BookingForm from './BookingPage';
import Main from './Main';
import Footer from './Footer';


function App() {
  return (
      <Router> {/* Wrap everything inside Router */}
          <Header />
          <Routes>
              <Route path="/Reservations" element={<BookingForm />} />
          </Routes>
          <Main />
          <Footer />
      </Router>
  );
}

export default App;
