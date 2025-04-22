import React, { useEffect, useState } from "react"; // Ensure useState is imported
import api from "./api";
import BookingPage from "./BookingPage";
import { useNavigate } from "react-router-dom";
import greekSalad from "./images/greek-salad.jpg";
import bruschetta from "./images/bruschetta.jpg";
import lemonDessert from "./images/lemon-dessert.jpg";
import sandwiches from "./images/restauranfood.jpg";

function Main({ dispatch }) {
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);  // For the star rating
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    // Fetch initial times when the component mounts
    useEffect(() => {
        const fetchInitialTimes = async () => {
            const today = new Date().toISOString().split("T")[0];
            const times = await api.fetchAPI(new Date (today));
            dispatch({ type: "UPDATE_DATE", times });
        };

        fetchInitialTimes();
    }, []);

    const submitForm = async (formData) => {
        const success = await api.submitAPI(formData);
        if (success) {
            navigate("/confirmed")
        } else {
            alert("Submission failed. Please try again.");
        }
    };

    // Handle rating click and hover
    const handleRatingClick = (index) => {
        setRating(index + 1);
    };

    return (
        <>
            <div className="hero">
                <h1>Little Lemon</h1>
                <div className="hero-image">
                    <img src={sandwiches} alt="sandwich" width={350} height={380} />
                </div>
                <h3>Chicago</h3>
                <h5>Mediterranean restaurant based in Illinois. Specializes in Italian, Greek, and Turkish dishes.</h5>
                <button style={{backgroundColor:'#F4CE14', borderRadius:'8px', width:'150px', height:'50px' ,cursor:'pointer', marginLeft:'100px', marginBottom:'10px', fontSize:'16px'}}><a href="/Reservations" style={{textDecoration:'none', color:'#333333'}}><b>Reserve a table</b></a></button>
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
                        <b><a href="/basket">Add to order</a></b>
                    </div>
                </article>

                <article>
                    <img src={bruschetta} alt="Bruschetta" width={340} height={220} />
                    <div>
                        <p>
                            <b>Bruschetta  <span>$5.99</span>  </b><br /><br />
                            Toasted bread slices topped with fresh tomatoes, olive oil, garlic, basil, and cheese.
                        </p>
                        <b><a href="/basket">Add to order</a></b>
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
                        <b><a href="/basket">Add to order</a></b>
                    </div>
                </article>
            </section>

            <BookingPage submitForm={submitForm} dispatch={dispatch} />

            <div>
                <b><h2>TESTIMONIALS</h2></b>
                <form style={{ paddingLeft: '30px', fontFamily: 'karla' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name </label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <br /><br />

                    <label htmlFor="rating" style={{ display: 'block', marginBottom: '5px' }}>Rating </label>
                    <div className="star-rating">
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                className={`star ${index < rating ? 'star-filled' : 'star-empty'}`}
                                onClick={() => handleRatingClick(index)}
                            >
                                ★
                            </div>
                        ))}
                    </div>

                    <label htmlFor="comment" style={{ display: 'block', marginBottom: '5px' }}>Comment </label>
                    <textarea
                        name="comment"
                        rows="5"
                        cols="40"
                        style={{
                            resize: 'vertical',
                            display: 'block',
                            marginBottom: '15px',
                        }}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />

                    <button type="submit" aria-label="Submit feedback" 
                    style={{ marginLeft: '30px', 
                    marginTop: '10px', 
                    fontFamily: 'karla', 
                    backgroundColor:'#495E57', 
                    color:'#F4CE14', 
                    width:'80px', 
                    height:'30px', 
                    borderRadius:'8px', 
                        cursor:'pointer' }}>
                        <b>Submit</b>
                    </button>
                </form>
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