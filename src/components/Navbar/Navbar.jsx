import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useCart } from '../Cart/Cartcontext';


const Navbar = () => {
  const {cartItems,logged}=useCart()
  console.log(logged)
  const username = JSON.parse(localStorage.getItem('username'))
  

  const[view,setView] =useState(false)
  function showDiv(){
setView(!view)
console.log('hii')
  }
  return (
    <>
    <div className='navbar'>
      <div className='sidebar-icon' onClick={()=>showDiv()}><GiHamburgerMenu/></div>
      
      {/* Logo */}
      <div className='logo' >
        <img className='logo-img'   src={logo} alt="img" />
      </div>

      {/* Middle links */}
      <div className="center-links" >
        <Link to='/' className='links'>Home</Link>
        <div className='dropdown-main' >
        <Link to='/shop'  className='links'>Shop</Link>
        <ul className='dropdown'   >
          <li className='list'><Link to='/mens' >Mens</Link></li>
          <li className='list'><Link  to='/womens' >Womens</Link></li>
          
        </ul>
        </div>
      </div>

      {/* Right icons */}
      <div className='righticons' >
        
        
        <Link to={logged? '/logged' : '/signup'} ><CgProfile  /></Link>
      
        <Link to='/cart'><BsCart4  /><sup style={{color:'red'}}>{cartItems.length===0 ?'':(cartItems.length)}</sup></Link>
      </div>
       
        <div className={view?'sidebar':'sidebar-show'}><RxCross2 onClick={()=>showDiv()} className={view?'sidebarcross-none' :'sidebar-cross'} />
         <div className='sidebar-list'> 
          <li onClick={()=>showDiv()} ><Link to='/' className='links'>Home</Link></li>
          <li onClick={()=>showDiv()}><Link to='/shop' className='links' >Shop</Link></li>
           <li onClick={()=>showDiv()}><Link to='/mens'className='links' >Mens</Link></li>
          <li onClick={()=>showDiv()} ><Link  to='/womens'className='links' >Womens</Link></li>
          
          </div>
        </div>
        
      
    </div>
    <hr />
  
    
    </>
  );
};

export default Navbar;
