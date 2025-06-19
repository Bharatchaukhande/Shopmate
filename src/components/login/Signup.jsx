import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png';

const Signup = () => {
    const navigate= useNavigate()
 const[data,setData]  = useState({
        name:'',
        email:'',
        password:''
    })
    const [arr,setArr]= useState([])
    function handleChange(e){
        const{name,value}=e.target
        setData({...data,[name]:value})
    }

    function handleSubmit(e){
        e.preventDefault();
        if(data.name==''|| data.email =='' || data.password==""){
            alert('Please enter all details')
        } else{
        const getData = JSON.parse(localStorage.getItem('users') || "[]");//jo apnne previous wale data the wo get data me store kiye
        const updatedArr = [...getData,data]//aur isme appne latest wala single object wala data hai wo apnne add kiya
        localStorage.setItem('users',JSON.stringify(updatedArr))
        setData({
            name:'',
            email:'',
            password:''
        })
        alert("Signup succefull")
        navigate('/login')
        }
    }

   
    return (
      <div className="login-wrapper">
        <div className="login-box">
          <img src={logo} alt="img" className="login-logo" />
          <h2>Sign Up</h2>
        
          <form onSubmit={handleSubmit}>
            <input
              type="name"
              placeholder="Enter your name"
              name='name'             
              required
              className="login-input"
              onChange={handleChange}
              value={data.name}
            />
            <input
              type="text"
              placeholder="Enter your email"
              name='email'              
              required
              className="login-input"
              onChange={handleChange}
              value={data.email}
            />
            <input
              type="password"
              placeholder="password"
              required
              name='password'
              className="login-input"
              onChange={handleChange}
              value={data.password}
            />
            <p>Already have an account <Link to='/login' style={{color:'blue'}}><u>login</u></Link></p>
            <button type="submit" className="login-button">Continue</button>
          </form>
          <div className="login-footer">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
  )
}

export default Signup
