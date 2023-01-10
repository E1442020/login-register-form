import React from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import '../Register/Register.css';

export default function HelloPage() {
  return (
    <> <div className='register-login-container'>
    <div className='register-content'>
    <h2>Success <AiOutlineCheck size={30} /> </h2>
        <h2>Hello </h2>
        </div>
        </div></>
  )
}
