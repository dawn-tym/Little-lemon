import React, { useEffect, useState } from "react"; // Ensure useState is imported
import api from "./api";
import { Link } from 'react-router-dom';
import BookingPage from "./BookingPage";
import { useNavigate } from "react-router-dom";
import greekSalad from "./images/greek-salad.jpg";
import bruschetta from "./images/bruschetta.jpg";
import lemonDessert from "./images/lemon-dessert.jpg";
import sandwiches from "./images/restauranfood.jpg";
import basket from "./images/basket .jpg"
import brothers from "./images/MarioAndAdrian.jpg"

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rating == 0) {
            alert("Please select a rating before submitting!");
            return;
        }
    }

    return (
        <>
            <div className="hero">
            <h1 style={{color:'#495e57'}}>Little Lemon</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

                <div className="hero-image">
                    <img src={sandwiches} alt="sandwich" width={500} height={430} />
                    <div className="overlay-text">
                    <h1 style={{color:'#f4ce14', textShadow:'0 4px 8px rgba(0, 0, 0, 0.2)'}}>Little Lemon</h1>
                        <h3>Chicago</h3><br></br><br></br><br></br><br></br>
                        <h5>Mediterranean restaurant based in Illinois. Specializes in Italian, Greek, and Turkish dishes.</h5>
                        <Link to="/Reservations" className="reserve-button-link">Reserve a table</Link>
                        </div>
                </div>
            </div>

            <div style={{marginTop:'60px'}}>
                <br />
                <br />
                <b><h2>WEEKLY SPECIALS</h2></b>
                <br />
                <br />
            </div>

            <section className="dishes">
                <article>
                    <img src={greekSalad} alt="Greek Salad" width={340} height={200} />
                    <div>
                        <p>
                            <b>Greek Salad <span>$10.99</span></b>  <br /><br />
                            Tomatoes, cucumbers, green peppers, and red onions, Kalamata olives and chunks of feta cheese.
                        </p>
                        <b><Link to="/basket">Add to order</Link></b>
                    </div>
                </article>

                <article>
                    <img src={bruschetta} alt="Bruschetta" width={340} height={220} />
                    <div>
                        <p>
                            <b>Bruschetta  <span>$5.99</span>  </b><br /><br />
                            Toasted bread slices topped with fresh tomatoes, olive oil, garlic, basil, and cheese.
                        </p>
                        <b><Link to="/basket">Add to order</Link></b>
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
                        <b><Link to="/basket">Add to order</Link></b>
                    </div>
                </article>
            </section>
            <hr className="section-divider" />

            

            <div>
                <b><h2>TESTIMONIALS</h2></b>
                <div className="testimonials">
                <form style={{ fontFamily: 'karla', alignContent:'center' }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log({name, rating, comment});
                        alert('Thank you for your feedback!');
                        setName('');
                        setRating(0);
                        setComment('');
                    }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name </label>
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

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

                    {rating === 0 && (
                        <p style={{ color: 'red', fontSize: '12px' }}>
                            Rating is required.
                        </p>
                    )}

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

                    <button type="submit" className="submit" aria-label="Submit feedback" >
                        <b>Submit</b>
                    </button>
                </form>
                </div>
            </div> 
            <hr className="section-divider" />

            <div className="about">
                <div className="about-box">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>Little Lemon is a cozy Mediterranean restaurant founded by two passionate brothers, Adrian and Mario. Born and raised in a lively Italian-American neighborhood, the brothers grew up surrounded by the aromas of their grandmother’s kitchen—fresh herbs, garlic, lemon zest, and the warmth of family meals. Inspired by their cultural roots and a shared love for Mediterranean cuisine, they dreamed of opening a place where authentic flavors and family-style hospitality could come together.
<br></br><br></br>
In 2015, that dream became a reality with the opening of Little Lemon in the heart of Chicago. The restaurant blends the rich culinary traditions of Italy, Greece, and Turkey, offering a diverse menu filled with rustic dishes, vibrant colors, and seasonal ingredients. From their signature lemon-infused olive oil to house-made baklava, every item is prepared with care and simplicity.
<br></br><br></br>
More than just a restaurant, Little Lemon is a gathering place. Whether it's a weekday dinner, a weekend celebration, or a quiet lunch for one, guests are welcomed like family. Adrian manages the kitchen with creativity and tradition, while Mario oversees the dining experience, ensuring every visitor feels at home. Together, they’ve built not just a business, but a beloved neighborhood spot where stories are shared and memories are made—always over good food. </p>
                </div>
                <img src={brothers} alt="brothers" width={600} height={430} style={{borderRadius:'15px', position:'sticky', right:'350px', overflow:'clip', marginTop:'100px'}}/>
            </div>
        </>
    );
}

export default Main;