import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const linkRef = useRef("");

  const handleClickRegisterForm = (e) => {
    e.preventDefault();
    if (email.length > 0 && password.length > 0) {
      localStorage.setItem("emailValue", email);
      localStorage.setItem("passwordValue", password);
      linkRef.current.click();
     
    }
  };
  return (
    <>
      <div className="register-login-container">
        <div className="register-content">
          <h2>Register</h2>
          <form className="register-form" onSubmit={handleClickRegisterForm}>
            <label>Name</label>
            <input type="text" placeholder="Enter Full Name" />
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label>Phone no</label>
            <input type="number" placeholder="Enter Contact no" />

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
