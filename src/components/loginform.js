import React, { useState } from "react";
import "./loginform.css";
import logo from "./../icons/ss.jpeg";

import "bootstrap/dist/css/bootstrap.min.css"

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="cover">
            <div className="imgs">
           <div className="container-image">
                <img src={logo} className="logo"></img>
           </div>
           </div>
             

        <h1>First of all, enter your email address</h1>
         <h2>We suggest using the email account that you use for work for registering.</h2>


            <input type="email" placeholder="name@work-email.com" required/>
             <div className="login-btn" onClick={popup}>Continue</div>


            <h3>OR</h3>

            <div className="alt-login">
                <div className="facebook" ></div>
                <br/>
                
                <div className="google" ></div>
                   
            </div>


            <p>Already using slack?</p>
            <a href="login.html">Sign into existing workplace</a>
            <div className='link'>
             <a href="#">Privacy</a>
             <a href="#" >Contact US</a>
             <a href="#" >Change region</a>

            </div>

            <div className={popupStyle}>
                <h3>Login Successful</h3>
                
            </div>
            
        </div>
    )
}

export default LoginForm