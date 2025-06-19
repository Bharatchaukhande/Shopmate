import React, { use, useState } from 'react';
import './LoginPage.css'; // For custom styles
import { BiColor } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useCart } from '../Cart/Cartcontext';

const LoginPage = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[msg,setMsg]=useState('')
    const {setLoginCheck}    = useCart()
  
 
  const navigate = useNavigate()
 
  const handleChange =(e)=>{
        const{name,value}=e.target
        if("email"===name){
            setEmail(value)
        }
        if("password"===name){
            setPassword(value)
        }
  }

const handleSubmit = (e) => {
  e.preventDefault();

  if (email === '' || password === '') {
    return setMsg('Enter all details');
  }

  const getDetails = JSON.parse(localStorage.getItem('users')) || [];
  const foundUser = getDetails.find(
    (user) => user.email === email && user.password === password
  );

  if (foundUser) {
    localStorage.setItem('username', JSON.stringify(foundUser));
    alert('Login successful');
    setLoginCheck(true);
    navigate('/');
  } else {
    setMsg('Invalid email or password');
  }

  setEmail('');
  setPassword('');
};

 
  return (
    <div className="login-wrapper">
        
      <div className="login-box">
         <img src={logo} alt="img" className="login-logo" />
        <p style={{color:'red'}}>{msg}</p>
       
        
        <h2>Sign in</h2>
       
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name='email'
            onChange={handleChange}
            className="login-input"
          />
          <input
            type="password"
            placeholder="password"
            name='password'
            onChange={handleChange}
            className="login-input"
          />
          <button type="submit" className="login-button">Continue</button>
        </form>
        <div className="login-footer">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
