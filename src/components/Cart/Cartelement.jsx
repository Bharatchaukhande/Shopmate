import React from 'react';
import './Cartelement.css';
import { useCart } from './Cartcontext';

const Cartelement = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
  } = useCart();

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className='main'>
      <div className="checkout-main">
        <div className='checkout-list'>
          <div className='list'>Image</div>
          <div className='list'>Product Name</div>
          <div className='list'>Quantity</div>
          <div className='list'>Price</div>
          <div className='list'>Remove</div>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className='checkout-div'>
            <div id='added-img' className="added-item">
              <img style={{ height: '100%', width: "100%" }} src={item.images[0]} alt="" />
            </div>
            <div className="added-item">
              <p>{item.title}</p>
            </div>
            <div id='quantity' className="added-item">
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
            <div className="added-item">
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="added-item">
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '5px 10px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {/* Subtotal Section */}
        <div
          style={{
            marginTop: '20px',
            paddingTop: '15px',
            borderTop: '2px solid #ccc',
            display: 'flex',
            justifyContent: 'flex-end',
            fontSize: '18px',
            fontWeight: '600'
          }}
        >
          Subtotal: ${subtotal.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Cartelement;
