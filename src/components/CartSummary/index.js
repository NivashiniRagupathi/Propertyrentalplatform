import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => {
  const navigate = useNavigate();
  return (
    <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.quantity * eachCartItem.price
      })

      const handleCheckout = () => {
        navigate('/checkout');
      };

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-heading">
              <span className="span-text">Order Total:</span> Rs {total}{' '}
            </h1>
            <p className="total-items-description">
              {cartList.length} Houses Saved
            </p>
            <button onClick={handleCheckout} type="button" className="button-lg">
              Checkout
            </button>
          </div>
          <button onClick={handleCheckout} type="button" className="button-sm">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
  )
  
}

export default CartSummary
