import React, { useEffect, useState } from "react";
import api from "./api"

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
            dispatch({ type: "UPDATE_DATE", times});
        }

        getTimes();

    },[dispatch]);

    // BookingForm function (defined inside BookingPage)
    function BookingForm({ availableTimes, dispatch, setBookingData, submitForm, bookingData }) {
        const [date, setDate] = useState(() => {
            const today = new Date();
            return today.toISOString().split("T")[0];
        });
        const [time, setTime] = useState("");
        const [guests, setGuests] = useState(1);
        const [occasion, setOccasion] = useState("");

        const handleDateChange = async (e) => {
            const selectedDate = e.target.value;
            setDate(selectedDate);
            
            const fetchedTimes = await api.fetchAPI(new Date (selectedDate));
            dispatch({ type: "UPDATE_DATE", times: fetchedTimes });

            setTime("");
        };

        const handleTimeChange = (e) => setTime(e.target.value);
        const handleGuestsChange = (e) => setGuests(e.target.value);
        const handleOccasionChange = (e) => setOccasion(e.target.value);

        const handleSubmit = async (e) => {
            e.preventDefault(); // Prevent page reload

            const formData = {
                date,
                time,
                guests,
                occasion,
            };

            const updatedBookings = [...bookingData, formData];
            setBookingData(updatedBookings);
            localStorage.setItem("bookings", JSON.stringify(updatedBookings));

            submitForm(formData)
        };

        return (
            <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '15px', paddingLeft: '30px', paddingBottom: '30px', fontFamily: 'markazi text', fontSize: '18pt' }}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={handleTimeChange} required >
                    <option value="" >Select time</option>
                    {availableTimes.length > 0 ? (
                        availableTimes.map((availableTime, index) => (
                            <option key={index} value={availableTime}>
                                {availableTime}
                                </option>
                        ))
                    ):(
                        <option disabled>No times available</option>
                    )}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} aria-label="Number of guests" onChange={handleGuestsChange} required />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={handleOccasionChange} required >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                </select>

                <input className="reserve" type="submit" value="Make Your reservation" disabled={!occasion} aria-label="Submit reservation form" style={{ borderRadius: '8px', backgroundColor:'#495e57',color:'#f4ce14', width:'160px', height:'30px', cursor: 'pointer' }} />
            </form>
        );
    }
    return (
        <div>
            <h2>Reservation Form</h2>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} bookingData={bookingData} setBookingData={setBookingData} submitForm={submitForm} />
        
        <table style={{fontFamily: 'karla', padding:'20px', borderCollapse: 'collapse', width: '80%', margin: '30px auto' }}> 
            <thead>
                <tr>
                    <th style={{ border: '1px solid #495e57d3', padding: '10px', backgroundColor: '#f2f2f2' }}>Date</th>
                    <th style={{ border: '1px solid #495e57d3', padding: '10px', backgroundColor: '#f2f2f2' }}>Time</th>
                    <th style={{ border: '1px solid #495e57d3', padding: '10px', backgroundColor: '#f2f2f2' }}>Guests</th>
                    <th style={{ border: '1px solid #495e57d3', padding: '10px', backgroundColor: '#f2f2f2' }}>Occasion</th>
                </tr>
            </thead>
            <tbody>
                {bookingData.map((booking, index) => (
                    <tr key={index}>
                        <td style={{ border: '1px solid #495e57d3', padding: '10px', backgroundColor: '#f2f2f2', textAlign:'center' }}>{booking.date}</td>
                        <td style={{ border: '1px solid #495e57d3', padding: '10px', backgroundColor: '#f2f2f2', textAlign:'center' }}>{booking.time}</td>
                        <td style={{ border: '1px solid #495e57d3', padding: '10px', backgroundColor: '#f2f2f2', textAlign:'center' }}>{booking.guests}</td>
                        <td style={{ border: '1px solid #495e57d3', padding: '10px', backgroundColor: '#f2f2f2', textAlign:'center' }}>{booking.occasion}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default BookingPage; 