import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const Signup = () => {
  return (
      <div className='wrapper'> 
    <form action="">
        <h1>Sign Up</h1>
        <div className="input-box">
            <input type="text" placeholder='username' required  />
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='password' required  />
            <FaLock className='icon'/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='confirm password' required  />
            <FaEyeSlash className='icon'/>
        </div>
        <button type="submit">Sign Up</button>
        <div className="register-link">
            <p>Already a member?   <a href='#'>Login</a></p>
        </div>
    </form>
     </div>
  
  );
}

export default Signup;