import React,{ useState }from "react"
import './LoginPage.css';
import { FaUserLarge } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

  const[action,setAction]= useState("Sign Up");

  return (
     <div className="insert_image">
     
    <div className="box">
    <div className='container'>

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">

{action==="Login" ? <div></div> :<div className="input">
          
          <input type="text" placeholder="Name"  ></input>
          <FaUserLarge className="icons name"/>
        </div> }
    
        <div className="input">
          
          <input type="email" placeholder="Email Id" required ></input>
<IoIosMail className="icons email"/>
        </div>

        <div className="input">
          
          <input type="password" placeholder="Password" required></input>
          <FaLock  className="icons password"/>
        </div>

        {action==="Login" ? <div></div> :<div className="input">
         
          <input type="password" placeholder="Confirm Password" required></input>
          <FaEyeSlash className="icons confirmpassword"/>

          
        </div>}
       
 {action==="Sign Up" ? <div></div> :  <div className="forgot-password">Forgot Password?<span>Click Here</span></div>}
 {action==="Sign Up" ? <div></div> : <div className="footer2" onClick={()=>{setAction("Sign Up")}}>Dont't you have an account?<span>SignUp </span> </div>}
 

 
 
 {action==="Login" ? <div></div> :  <div className="footer">
  
  <p onClick={()=>{setAction("Login")}}>Already have an account?<span> Login</span></p>
  
</div>}
   {action==="Sign Up" ? <div className="submit-container">
  <p onClick={()=>{setAction("Sign Up")}}>Sign Up</p></div> : <div></div>}

  {action==="Login" ? <div className="submit-container2">
  <p onClick={()=>{setAction("Login")}}>Login</p></div> : <div></div>}

      </div>
      </div>
    </div>
    </div>
  )
}

export default LoginPage