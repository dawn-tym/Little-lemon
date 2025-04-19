import React from "react";

function ConfirmedBooking () {
    return (
        <>
        <h2 style={{textAlign:'center', paddingBottom:'0px'}}>Congratulations!</h2>
        <div style={{display:'flex', justifyContent:'center'}}>
        <p style={{fontFamily:'karla', 
            padding:'30px', 
            backgroundColor:'#495e57', 
            color:'#f4ce14' , 
            marginLeft:'30px', 
            width:'30%', 
            borderRadius:'15px',
            fontSize:'20px'}}>
            Your booking has been confirmed.<br/><br/>Thank you for choosing Little Lemon. We hope to see you again soon.</p>
            </div>
        </>
    )
}

export default ConfirmedBooking;