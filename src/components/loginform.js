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
             

        <h1 className="heading">First of all, enter your email address</h1>
         <h2 className="s-head">We suggest using the email account that you use for work</h2>


            <input type="email" placeholder="name@work-email.com" required/>
             <div className="login-btn" onClick={popup}>Continue</div>


            <h4>OR</h4>

            <a class="btn btn-secondary card__google" href="https://google.com" target=""_blank style={{color:"blue",background:"white",border:"solid blue"}}><i class="fab fa-google">
            </i>&nbsp;Continue with Google</a>
            <a class="btn btn-secondary card__apple" href="https://appleid.apple.com" target=""_blank style={{color:"black",background:"white",border:"solid black"}}><i class="fab fa-apple">
            </i>&nbsp;Continue with Apple</a>


            <p className="x">Already using slack?</p>
            <a href="login.html" className="y">Sign into existing workplace</a>
            <div className='link'>
             <a href="#">Privacy</a>
             <a href="#" >Contact US</a>
             <a href="#" >Change region</a>

            </div>

            <div className={popupStyle}>
                <h4>Login Successful</h4>
                
            </div>
            
        </div>
    )
}

export default LoginForm