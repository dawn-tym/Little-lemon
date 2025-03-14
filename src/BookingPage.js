import React, { useState } from "react";

function BookingPage({ availableTimes = [], dispatch }) {
    // BookingForm function (defined inside BookingPage)
    function BookingForm({ availableTimes, dispatch }) {
        const [date, setDate] = useState("");
        const [time, setTime] = useState("");
        const [guests, setGuests] = useState(1);
        const [occasion, setOccasion] = useState("");

        const handleDateChange = (e) => {
            const selectedDate = e.target.value;
            setDate(selectedDate);
            // Dispatch the selected date to update availableTimes
            dispatch({ type: "UPDATE_DATE", date: selectedDate });
        };

        const handleTimeChange = (e) => setTime(e.target.value);
        const handleGuestsChange = (e) => setGuests(e.target.value);
        const handleOccasionChange = (e) => setOccasion(e.target.value);

        const handleSubmit = (e) => {
            e.preventDefault(); // Prevent page reload
            console.log({ date, time, guests, occasion }); // Log form data
        };

        return (
            <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '15px', paddingLeft: '30px', paddingBottom: '30px', fontFamily: 'markazi text', fontSize: '14pt' }}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} />

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" value={time} onChange={handleTimeChange}>
                    {availableTimes.map((availableTime, index) => (
                        <option key={index} value={availableTime}>
                            {availableTime}
                        </option>
                    ))}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                </select>

                <input type="submit" value="Make Your reservation" style={{ borderRadius: '8px' }} />
            </form>
        );
    }

    return (
        <div>
            <h2>Reservation Form</h2>
            {/* Render BookingForm and pass availableTimes and dispatch */}
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
    );
}

export default BookingPage;