import React, { useState } from 'react';
import '../login/Login.css';
import Container from '@mui/material/Container';
import {FiEye, FiEyeOff } from "react-icons/fi";


const Login = () => {


  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

    return (
        <div className="login">
            <Container>
                <div className="login__box">
                    <h1 className='login__box-title'>Sign Up</h1>
                <form action="#">
                    <label htmlFor="username">Username</label><br />
                    <input type="username" name="username" id="username" placeholder='jone doe' required/>
                    <br /><br />
                    <label htmlFor="password">Password</label><br />
                    <div className="password-wrapper">
           <input type={isPasswordOpen ? "text" : "password"} placeholder="Enter Your password" required/>
           { isPasswordOpen ? <FiEyeOff onClick={() => setIsPasswordOpen(false)}/> : <FiEye onClick={() => setIsPasswordOpen(true)}/>}
          </div>
                    <button className='login__box-btn'>Submit</button>                  
                </form>
                </div>
            </Container>
        </div>
    )
}

export default Login