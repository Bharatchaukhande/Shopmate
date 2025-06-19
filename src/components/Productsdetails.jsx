import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../index.css'
import { useCart } from './Cart/Cartcontext';

const Productsdetails = () => {
    const {state}=useLocation()
  const navigate = useNavigate();
  const [changeimg,setChangeimg]=useState(0)
    const item = state?.item
  const {addToCart,logged} = useCart()

  function  cartCheck(){
    if(logged){
        addToCart(item);
        alert('Added to Cart') 
    } else  alert('login to add items to cart')
  }
  
  if (!item) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>No product data available</h2>
        <button onClick={() => navigate(-1)} style={{ marginTop: "20px" }}>Go Back</button>
      </div>
    );
  }

  const { images, title, price, category, description, rating } = item;

  return (
    <div className='productsdetails-propermain' style={{height:"fit-content",width:'100%',display:'flex',justifyContent:"center",backgroundColor:'#f5f5f5',gap:'20px'}}>
      <div className='productdetails-images'   style={{height:'100%',width:'300px',backgroundColor:"#f5f5f5",paddingTop:'10px'}}>
        <img onClick={()=>setChangeimg(0)} className='imgstyle'  src={images[0]} alt="" />
        <img onClick={()=>setChangeimg(1)} className='imgstyle'  src={images[1]} alt="" />
        <img onClick={()=>setChangeimg(2)}  className='imgstyle'   src={images[2]} alt="" />
        <img onClick={()=>setChangeimg(3)} className='imgstyle'   src={images[3]} alt="" />
      </div>
    <div className='productdetails-main' style={{
      padding: "40px",
      maxWidth: "600px",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
      <img className='productdetails-main-img' src={images[changeimg]} alt={title} style={{ width: "300px", height: "300px", objectFit: "contain", marginBottom: "20px",transition:'2s ease-out' }} />
      <h1>{title}</h1>
      <h2 style={{ color: "green" }}>${price}</h2>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Rating:</strong> {rating?.rate} ({rating?.count} reviews)</p>
      <button onClick={() => navigate(-1)} style={{padding:'8px 16px',backgroundColor:" #1b1b1b",border:'none',borderRadius:'8px',color:"white",marginRight:'10px'}}>Go Back</button>
       <button onClick={ ()=>cartCheck()}   style={{padding:'8px 16px',backgroundColor:" #1b1b1b",border:'none',borderRadius:'8px',color:"white"}}>Add to cart</button>
    </div>
    </div>
  );
 
}

export default Productsdetails
