import React, { useReducer, useState } from "react";
import greekSalad from "./images/greek-salad.jpg";
import bruschetta from "./images/bruschetta.jpg";
import lemonDessert from "./images/lemon-dessert.jpg";
import sandwiches from "./images/restauranfood.jpg";

// Function to initialize availableTimes
function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

// Reducer function to manage availableTimes
function updateTimes(state, action) {
    switch (action.type) {
        case "UPDATE_DATE":
            // For now, return the same available times regardless of the date
            return state;
        default:
            return state;
    }
}

function Main() {
    // Use useReducer to manage availableTimes state
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    // BookingForm function (defined inside Main)
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
        <>
            <div className="hero">
                <h1>Little Lemon</h1>
                <div className="hero-image">
                    <img src={sandwiches} alt="sandwich" width={350} height={380} />
                </div>
                <h3>Chicago</h3>
                <h5>Mediterranean restaurant based in Illinois. Specialises in Italian, Greek, and Turkish dishes.</h5>
            </div>

            <div>
                <br />
                <br />
                <b><h2>WEEKLY SPECIALS</h2></b>
                <br />
                <br />
            </div>

            <section className="dishes">
                <article>
                    <img src={greekSalad} alt="Greek Salad" width={340} height={220} />
                    <div>
                        <p>
                            <b>Greek Salad <span>$10.99</span></b>  <br /><br />
                            Tomatoes, cucumbers, green peppers, and red onions, Kalamata olives and chunks of feta cheese.
                        </p>
                        <b><p>Add to order</p></b>
                    </div>
                </article>

                <article>
                    <img src={bruschetta} alt="Bruschetta" width={340} height={220} />
                    <div>
                        <p>
                            <b>Bruschetta  <span>$5.99</span>  </b><br /><br />
                            Toasted bread slices topped with fresh tomatoes, olive oil, garlic, basil, and cheese.
                        </p>
                        <b><p>Add to order</p></b>
                    </div>
                </article>

                <article>
                    <img src={lemonDessert} alt="Lemon Dessert" width={340} height={220} />
                    <div>
                        <p>
                            <b>Lemon Dessert  <span>$10.99</span></b>  <br /><br />
                            Layered lemon flavored cake, with vanilla icing and lemon glaze.
                        </p>
                        <br />
                        <b><p>Add to order</p></b>
                    </div>
                </article>
            </section>

            <div>
                <b><h2>TESTIMONIALS</h2></b>
                <form>
                    <label>
                        Name
                        <input type="text" name="name" />
                    </label>
                </form>
                <button type="Submit">Submit</button>
            </div>

            <div className="about">
                <div className="about-box">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Little Lemon is a Mediterranean restaurant founded by brothers, Adrian and Mario, who are Italian Americans and share a love for Mediterranean dishes so, they opened a restaurant in Chicago. </p>
                </div>
            </div>

            {/* Reservation Form at the bottom of the page */}
            <div>
                <h2>Reservation Form</h2>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            </div>
        </>
    );
}

export default Main;