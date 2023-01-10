import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../Register/Register.css';

export default function HelloPage() {
    const[displayPage,setDisplayPage]=useState(false);
    const linkRef = useRef("");

const logOut=()=>{
    localStorage.removeItem('login');
    linkRef.current.click();
}

 useEffect(()=>{
    if(localStorage.getItem('login')){
        setDisplayPage(true)
    }else{
        setDisplayPage(false)
        console.log('ff')
    }

 },[])
  return (
    <> <div className='register-login-container'>
    <div className='register-content'>
        {displayPage?<><h2 className='finish'>Success <AiOutlineCheck size={30} /> </h2>
        <h2>Hello </h2>
        <button className='buttonStyle' onClick={logOut}><Link to='/' ref={linkRef}></Link>LogOut</button>
        </>:<><h2>please first login</h2>
        <button  className='buttonStyle' onClick={logOut}><Link to='/' ref={linkRef}></Link>LogIn</button>

        </>}
    </div>
        </div>
    
    </>
  )
}
