import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[fullName,setFullName]=useState("")
  const linkRef = useRef("");
  const[confirmField,setConfirmField] = useState(true)

  const handleClickRegisterForm = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
        setConfirmField(true)
      localStorage.setItem("emailValue", email);
      localStorage.setItem("passwordValue", password);
      localStorage.setItem("fullNameValue", fullName);
      linkRef.current.click();
     
    }else{
        setConfirmField(false);
    }
  };
  return (
    <>
      <div className="register-login-container">
        <div className="register-content">
          <h2>Register</h2>
          <form className="register-form" onSubmit={handleClickRegisterForm}>
            <label>Name</label>
            <input type="text" placeholder="Enter Full Name" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)}/>
            <span className="confirmField">{!confirmField&&'this field can’t be empty'}</span>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="confirmField">{!confirmField&&'this field can’t be empty'}</span>

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="confirmField">{!confirmField&&'this field can’t be empty'}</span>

            <label>Phone no</label>
            <input type="number" placeholder="Enter Contact no" />
            <span className="confirmField">{!confirmField&&'this field can’t be empty'}</span>

            <button type="submit"><Link to= "/"></Link>Register</button>
            <p>
              Already register <Link to="/" ref={linkRef}>login in?</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
