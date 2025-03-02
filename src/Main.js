import React from "react";
import greekSalad from "./images/greek-salad.jpg";
import bruschetta from "./images/bruschetta.jpg";
import lemonDessert from "./images/lemon-dessert.jpg";
import sandwiches from "./images/restauranfood.jpg";

function Main () {
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
            <br></br>
            <br></br>
            <b><h2>WEEKLY SPECIALS</h2></b>
                <br></br>
                <br></br>
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
                        <br></br>
                        <b><p>Add to order</p></b>
                    </div>
                </article>
            </section>

            <div>
                <b><h2>TESTIMONIALS</h2></b>
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
