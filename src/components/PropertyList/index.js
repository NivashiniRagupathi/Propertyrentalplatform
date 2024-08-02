import React, {Component} from 'react';
import CartContext from '../../context/CartContext';
import './index.css'

class PropertyList extends Component {
  state = {quantity: 1}

  render(){
    const {id, image, title, description, price, location, numberOfBedrooms, amenities } = this.props
    const {quantity} = this.state
    return(
      <CartContext.Consumer>
    {value =>{
      const {addCartItem} = value
      const onClickAddToCart = () => {
        addCartItem({id, image, title, description, price, location, numberOfBedrooms, amenities, quantity })
      }
      return (
        <li className="property">
          <img className='property-image' src={image} alt={title} />
          <h2 className='property-title'>{title}</h2>
          <p className='property-desc'>{description}</p>
          <p>Price: <span className='property-span'>Rs {price} per month</span></p>
          <p>Location: <span className='property-span'>{location}</span></p>
          <p>Bedrooms: <span className='property-span'>{numberOfBedrooms}</span></p>
          <p>Amenities: <span className='property-span'>{amenities.join(', ')}</span></p>
          <button onClick={onClickAddToCart} className='book-btn'>Book Now</button>
        </li>
      );
    }}
  </CartContext.Consumer>
    )
  }
};

export default PropertyList;

