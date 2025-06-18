import React, { useState } from 'react';
import './LoginPage.css'; // For custom styles
import { BiColor } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const LoginPage = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[msg,setMsg]=useState('')

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
    const getDetails = JSON.parse(localStorage.getItem('users'))
    {getDetails.map((currdata)=>{
        if(currdata.email==email && currdata.password==password){
          let username = currdata
          localStorage.setItem('username',JSON.stringify(username))
            alert('login succesful')
            navigate('/home')
        }else if(email == ''|| password == ''){
            return setMsg('Enter all details')
        }else return setMsg('Invalid email or password')
    })}
    setEmail('')
    setPassword('')
    
  };
 
  return (
    <div className="login-wrapper">
        
      <div className="login-box">
         <img src={logo} alt="img" className="login-logo" />
        <p style={{color:'red'}}>{msg}</p>
       
        
        <h2>Sign in</h2>
        <p></p>
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
