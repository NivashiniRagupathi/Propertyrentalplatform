import React, { Component } from 'react';
import Header from '../Header';
import './index.css';
import CartContext from '../../context/CartContext';

class BookingForm extends Component {
  state = {
    name: '',
    email: '',
    mobileNo: '',
    address: '',
    paymentMode: 'Cash on Delivery',
    isConfirmed: false,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e, removeAllCartItems) => {
    e.preventDefault();
    this.setState({ isConfirmed: true });
    removeAllCartItems();
  };

  render() {
    const { name, email, mobileNo, address, paymentMode, isConfirmed } = this.state;

    return (
      <CartContext.Consumer>
        {({ removeAllCartItems }) => (
          <>
            <Header />
            <div className='booking-page-container'>
              {!isConfirmed && (
                <div className="booking-form-container">
                  <h1>Booking Form</h1>
                  <form className='submit-form' onSubmit={(e) => this.handleSubmit(e, removeAllCartItems)}>
                    <label>
                      Name:
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        className='input-box'
                        required
                      />
                    </label>
                    <label>
                      Email:
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                    <label>
                      Mobile Number:
                      <input
                        type="text"
                        name="mobileNo"
                        value={mobileNo}
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                    <label>
                      Address:
                      <textarea
                        name="address"
                        value={address}
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                    <label>
                      Payment Mode:
                      <select
                        name="paymentMode"
                        value={paymentMode}
                        onChange={this.handleChange}
                        required
                      >
                        <option value="Cash on Delivery">Cash on Delivery</option>
                        {/* Add other payment options here if needed */}
                      </select>
                    </label>
                    <button type="submit">Confirm Booking</button>
                  </form>
                </div>
              )}
              {isConfirmed && (
                <div className='confirm-container'>
                  <img
                    className="confirmed-image"
                    src="https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png"
                    alt="success"
                  />
                  <h1>Booking Confirmed</h1>
                </div>
              )}
            </div>
          </>
        )}
      </CartContext.Consumer>
    );
  }
}

export default BookingForm;