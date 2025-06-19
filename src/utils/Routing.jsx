import React from 'react'
import {Routes,Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Ecomcards from '../components/Ecomcards'
import Home from '../Pages/Home'
import Productsdetails from '../components/Productsdetails'
import Cart from '../Pages/Cart'

import Mens from '../Pages/Mens'
import Womens from '../Pages/Womens'
import Signup from '../components/login/Signup'
import LoginPage from '../components/login/Loginpage'
import Footer from '../components/Footer/Footer'
import Logged from '../components/Logged/Logged'                     

const Routing = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route element={<Signup/>} path='/'/>
            <Route element={<Home/>} path='/home'/>
            <Route element={<Ecomcards/>} path='/shop'/>
             <Route element={<Logged/>} path='/logged'/>
              <Route element={<Mens/>} path='/mens'/>
              <Route element={<Womens/>} path='/womens/'/>
              <Route path='/details' element={<Productsdetails/>}/>
            
              
             <Route path='/cart' element={<Cart/>}/>
             <Route path='/login' element={<LoginPage/>}/>
        </Routes>
        <Footer/>
              
    </div>
  )
}

export default Routing

