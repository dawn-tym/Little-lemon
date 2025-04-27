import React, { useEffect, useState } from "react";
import api from "./api";

function BookingPage({ availableTimes = [], dispatch, submitForm }) {
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("bookings")) || [];
        setBookingData(storedData);
    }, []);

    useEffect(() => {
        const today = new Date();
        async function getTimes() {
            const times = await api.fetchAPI(today);
            dispatch({ type: "UPDATE_DATE", times });
        }
        getTimes();
    }, [dispatch]);

    function BookingForm({ availableTimes, setBookingData, submitForm }) {
        const [date, setDate] = useState(() => {
            const today = new Date();
            return today.toISOString().split("T")[0];
        });
        const [time, setTime] = useState("");
        const [guests, setGuests] = useState(1);
        const [occasion, setOccasion] = useState("");

        const handleDateChange = (e) => {
            setDate(e.target.value);
            setTime("");
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const formData = { date, time, guests, occasion };

            const updatedBookings = [...bookingData, formData];
            setBookingData(updatedBookings);
            localStorage.setItem("bookings", JSON.stringify(updatedBookings));
            submitForm(formData);

            // Clear form inputs after submit
            setTime("");
            setGuests(1);
            setOccasion("");
        };

        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                <div className="reservation-form">
                    <form onSubmit={handleSubmit} style={{
                        display: 'grid',
                        gap: '15px',
                        fontFamily: 'markazi text',
                        fontSize: '18pt'
                    }}>
                        <label htmlFor="res-date">Choose date</label>
                        <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

                        <label htmlFor="res-time">Choose time</label>
                        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required >
                            <option value="">Select time</option>
                            {availableTimes.length > 0 ? (
                                availableTimes.map((availableTime, index) => (
                                    <option key={index} value={availableTime}>{availableTime}</option>
                                ))
                            ) : (
                                <option disabled>No times available</option>
                            )}
                        </select>

                        <label htmlFor="guests">Number of guests</label>
                        <input type="number" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} required />

                        <label htmlFor="occasion">Occasion</label>
                        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required >
                            <option value="">Select occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Engagement">Engagement</option>
                        </select>

                        <input className="reserve" type="submit" value="Make Your reservation" disabled={!occasion} />
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div style={{ textAlign: 'center', fontFamily: 'karla' }}>
            <h2 style={{ marginBottom: '20px' }}>Reservation Form</h2>
            <BookingForm availableTimes={availableTimes} setBookingData={setBookingData} submitForm={submitForm} />

            <table style={{
                width: '80%',
                margin: '20px auto',
                borderCollapse: 'collapse',
                textAlign: 'center',
                border: '1.5px solid #495E57'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ padding: '10px', border: '1px solid #495E57' }}>Date</th>
                        <th style={{ padding: '10px', border: '1px solid #495E57' }}>Time</th>
                        <th style={{ padding: '10px', border: '1px solid #495E57' }}>Guests</th>
                        <th style={{ padding: '10px', border: '1px solid #495E57' }}>Occasion</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingData.length === 0 ? (
                        <tr>
                            <td colSpan="4" style={{ textAlign: 'center' }}>No reservations yet</td>
                        </tr>
                    ) : (
                        bookingData.map((reservation, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #495E57' }}>{reservation.date}</td>
                                <td style={{ border: '1px solid #495E57' }}>{reservation.time}</td>
                                <td style={{ border: '1px solid #495E57' }}>{reservation.guests}</td>
                                <td style={{ border: '1px solid #495E57' }}>{reservation.occasion}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default BookingPage