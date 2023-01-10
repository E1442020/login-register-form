import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../Register/Register.css";


export default function Login() {
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [done, setDone] = useState(false);
  const [submit, setSubmit] = useState(false);
  const linkRef = useRef("");
 
  // linkRef.current.display='none'

  const handleClickLoginForm = (e) => {
    e.preventDefault();
    setSubmit(true);

    const valid =
      confirmEmail === localStorage.getItem("emailValue") &&
      confirmPassword === localStorage.getItem("passwordValue");

    if (valid) {
      setDone(valid);
      // console.log('true')
    } else {
      setDone(valid);
      // console.log('false')
    }
    if (valid == true) {
      linkRef.current.click();
      localStorage.setItem('login',true)
    }
    setTimeout(() => console.log(valid), 1000);

    console.log(confirmPassword);
    console.log(confirmEmail);
  };

  return (
    <>
      <div className="register-login-container">
        <div className="login-content">
          {submit ? 
            <>
              {done ? "" : <p className="invalid">Invalid Email or Password</p>}
            </>
            : (
            ""
          )}

          <h2>Login</h2>
          <form className="register-form" onSubmit={handleClickLoginForm}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">
              <Link ref={linkRef} to="/helloPage"></Link>Login
            </button>

            <p>
              <Link to="register">Create New Account</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
