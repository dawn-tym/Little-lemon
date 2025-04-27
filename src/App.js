import React , { useReducer } from 'react';
import { Routes, Route, useNavigate, Router } from "react-router-dom";
import './App.css';
import Header from './Header';
import BookingPage from './BookingPage';
import Main from './Main';
import ConfirmedBooking from './ConfirmedBooking';
import Footer from './Footer';
import api from './api'


// Reducer function
function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_DATE":
      return action.times || [];
    default:
      return state;
  }
}

// Initialize availableTimes
function initializeTimes() {
  const today = new Date();
  return api.fetchAPI(today);
}

function App() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  
  const submitForm = async (formData) => {
    const success = await api.submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <Routes>
        {/* Home page */}
        <Route path="/home" element={<Main availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />

        {/* Reservations page */}
        <Route path="/reservations" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;