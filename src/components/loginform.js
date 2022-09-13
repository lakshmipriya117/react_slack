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
             

        <h1 className="heading">First of all,enter your email address</h1>
         <h2 className="s-head">We suggest using the <b>email address that you use at work</b></h2>


            <input type="email" placeholder="name@work-email.com" required/>
             <div className="login-btn" onClick={popup}><b>Continue</b></div>


            <h5 className="or">OR</h5>

            {/* <a class="btn btn-secondary card__google" href="https://google.com" target=""_blank style={{color:"blue",background:"white",border:" solid blue",textAlign:"center"}}><i class="fab fa-google">
            </i>&nbsp;&nbsp;Continue with Google</a> */}


            <a class=" btn-lg" href="https://google.com"  style={{color:"#4285f4",background:"white",border:"2px solid #4285f4",fontSize:"17px"}}><i class="fab fa-google"></i><b>&nbsp;&nbsp;Continue with Google</b></a>
            <a class="btn-lg" href="https://appleid.apple.com"  style={{color:"black",background:"white",fontSize:"17px",border:" 2px solid black"}}><i class="fab fa-apple"></i><b>&nbsp;&nbsp;&nbsp;Continue with Apple</b></a>
            


            <p className="x">Already using slack?</p>
            <a href="login.html" className="y">Sign in to an existing workplace</a>
            <div className='link'>
             <a href="#" style={{color:"#454245",padding:"10px 9px 32px 9px",fontSize:"15px"}}>Privacy & Terms</a>
             <a href="#" style={{color:"#454245",padding:"10px 9px 32px 9px",fontSize:"15px"}} >Contact US</a>
             <a href="#" style={{color:"#454245",padding:"10px 9px 32px 9px",fontSize:"15px"}}>Change region</a>

            </div>

            <div className={popupStyle}>
                <h5>Login Successful</h5>
                
            </div>
            
        </div>
    )
}

export default LoginForm