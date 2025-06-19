import React from 'react';
import logo from '../../assets/logo.png';
import '../../index.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/Cartcontext';

const Logged = () => {
  const user =  JSON.parse(localStorage.getItem('username'));
  const navigate = useNavigate()
  const {setLoginCheck}=useCart()

  if (!user) {
    return (
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center',marginTop:'10px' }}>
        <div>
        <h2>Please login to view your profile.</h2>
        <h2 style={{fontSize:'20px',marginTop:'20px'}}> If you already have an account please <Link style={{color:'blue'}}  to='/login'><u>Login</u></Link></h2>
         <h2 style={{fontSize:'20px',marginTop:'20px'}}> Please signup if you don't have an account please <Link style={{color:'blue'}}  to='/signup'><u>Signup</u></Link></h2>
        </div>
      </div>
    );
  }
  const logout= ()=>{
    localStorage.removeItem('users')
    localStorage.removeItem('username')
    localStorage.removeItem('cartItems')
    setLoginCheck(false)
    navigate('/')
  }

  return (
    <div style={{ height: '100vh', width: "100%", backgroundColor: '#f4f4f4', display: 'flex', justifyContent: 'center' }}>
      <div style={{ height: '500px', width: '700px', margin: '40px' }}>
        <h3>Profile</h3>
        <div style={{ margin: '10px' }}>
          <p style={{ textAlign: 'start', color: '#707070' }}>Name</p>
          <p style={{ textAlign: 'start', paddingTop: '5px' }}>{user.name}</p>
        </div>
        <div style={{ margin: '10px' }}>
          <p style={{ textAlign: 'start', color: '#707070' }}>Email</p>
          <p style={{ textAlign: 'start', paddingTop: '5px' }}>{user.email}</p>
        </div> 
        <div style={{margin:"10px"}}>
            <button onClick={logout} style={{padding:"8px 24px",backgroundColor:"#18151C",color:"white",borderRadius:"5px",border:'none'}}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Logged;
