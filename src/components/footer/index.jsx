import React from "react";
import './style.css'


const Footer = () =>{
    return(
        <>
       {/* ----------------- Footer -------------- */}

        <footer>

            <div class="footer">

        <div class="footer-div-1">
          {/* <h4>About the shop</h4> */}
          <h3>Download Our App</h3>
          <h1>M<b>oo</b>vie </h1>
        </div>

        <div class="footer-div-3">
            <h3>Navigation</h3>
            <p>Home</p>
            <p>My List</p>
            <p>About Us</p>
        </div>
        

        <div class="footer-div-3">
            <h3>Legal</h3>
            <p>General info</p>
            <p>Smart Gadget</p>
            <p>Bill Payment Verification</p>
           
        </div>
    
           
        <div class="footer-div-3">
            <h3>Contact Us:</h3>
            <p>support@egymoviees.com</p>
            <p>tel: +201045963322</p>
            <p>OR By Using:</p>
            <div className="icons">
                

            </div>
        </div>

        <div class="footer-div-3">
            <h3>Share Website Via:</h3>
            <p>Facebook</p>
            <p>Instagram</p>
        </div>
        </div>
        <hr/>
        <p className="Copyright"><h1 className="logo">
            M<span>oo</span>vie</h1>Moovie.2023  All Rigts Reserved.</p>
    </footer>    


        </>

    );
}

export default Footer;

