import React, { useReducer } from "react";
import BookingPage from "./BookingPage";
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

    return (
        <>
            <div>
                {/* Pass availableTimes and dispatch to BookingPage */}
                <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
            </div>

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
        </>
    );
}

export default Main;