import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../index.css'

const Ecomcard = ({ item, index }) => {
  if (!item) return null; // protect from crashing

  return (
    <>
    <div className='category-box-main'  key={index} style={{
      backgroundColor: "#ffffff",
      width: '280px',
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      padding: "10px",
      
    }}>
      <div className='category-box-insidediv' style={{
        height: "180px",
        width: "80%",
        marginTop: '20px',
        borderRadius: '10px'
      }}>
        <img
          style={{ height: "100%", width: "100%", objectFit: 'contain' }}
          src={item.images?.[0]} // ✅ FIXED HERE
          alt={item.title}
        />
      </div>

      <h1 style={{
        fontSize: "13px",
        textAlign: "center",
        padding: "0px 10px"
      }}>{item.title}</h1>

      <h3 style={{ fontSize: "13px", color: "#666666" }}>{item.category}</h3>
      <h2 className='price' style={{ fontSize: "22px", color: "green" }}>${item.price}</h2>

      <Link 
        state={{ item}}
        to='/details'
        style={{
          padding: '8px 16px',
          backgroundColor:" #1b1b1b",
          border: 'none',
          borderRadius: '8px',
          color: "white",
          textDecoration: "none"
        }}
        >View Details</Link>
    </div>
 
    </>
  )
}

export default Ecomcard
