import React, { useRef, useState } from 'react';
import logo from '../../assets/logo.png';
import { CgProfile } from "react-icons/cg";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useCart } from '../Cart/Cartcontext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Navbar = () => {
  const {cartItems,logged}=useCart()
  const logoanim = useRef()
  const link1 = useRef()
   const link2 = useRef()
    const rightlogo1 = useRef()
     const rightlogo2 = useRef()
     const sidebaranim = useRef()

useGSAP(() => {
 
  
  gsap.from([sidebaranim.current,logoanim.current,link1.current, link2.current,rightlogo1.current, rightlogo2.current] ,{
    y: -50,
    opacity: 0,
     delay:0.2,
      ease: "power2.out",
      duration: 0.2,
      stagger:0.2,
  })
}, []);

  const username = JSON.parse(localStorage.getItem('username'))
  

  const[view,setView] =useState(false)
  function showDiv(){
setView(!view)
console.log('hii')
  }
  return (
    <>
    <div className='navbar'>
      <div ref={sidebaranim} className='sidebar-icon' onClick={()=>showDiv()}><GiHamburgerMenu/></div>
      
      {/* Logo */}
      <div  className='logo' >
        <img ref={logoanim} className='logo-img'   src={logo} alt="img" />
      </div>

      {/* Middle links */}
      <div className="center-links" >
        <Link ref={link1}  to='/' className='links'>Home</Link>
        <div ref={link2} className='dropdown-main' >
        <Link to='/shop'  className='links'>Shop</Link>
        <ul className='dropdown'   >
          <li className='list'><Link to='/mens' >Mens</Link></li>
          <li className='list'><Link  to='/womens' >Womens</Link></li>
          
        </ul>
        </div>
      </div>

      {/* Right icons */}
      <div className='righticons' >
        
        
        <Link ref={rightlogo1}  to={logged? '/logged' : '/signup'} ><CgProfile  /></Link>
      
        <Link ref={rightlogo2}  to='/cart'><BsCart4  /><sup style={{color:'red'}}>{cartItems.length===0 ?'':(cartItems.length)}</sup></Link>
      </div>
       
        <div   className={view?'sidebar':'sidebar-show'}><RxCross2  onClick={()=>showDiv()} className={view?'sidebarcross-none' :'sidebar-cross'} />
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
