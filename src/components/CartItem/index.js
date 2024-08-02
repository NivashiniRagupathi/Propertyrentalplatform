import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, description, quantity, price, image} = cartItemDetails
      const onRemoveCartItem = () => {
        removeCartItem(id)
      }
      // TODO: Update the functionality to increment and decrement quantity of the cart item

      const onClickDecrementCartItemQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const onClickIncrementCartItemQuantity = () => {
        incrementCartItemQuantity(id)
      }
      return (
        <li className="cart-item">
          <img className="cart-product-image" src={image} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">{description}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                data-testid="minus"
                onClick={onClickDecrementCartItemQuantity}
                type="button"
                className="quantity-controller-button"
              >
                <BsDashSquare color="#52606D" size={12} />
                <p className="for-remove-errors">remove</p>
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                data-testid="plus"
                onClick={onClickIncrementCartItemQuantity}
                type="button"
                className="quantity-controller-button"
              >
                <BsPlusSquare color="#52606D" size={12} />
                <p className="for-remove-errors">remove</p>
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
              <button
                data-testid="remove"
                className="remove-button"
                type="button"
                onClick={onRemoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            className="delete-button"
            type="button"
            onClick={onRemoveCartItem}
          >
            <AiFillCloseCircle color="#616E7C" size={20} />
            <p className="for-remove-errors">remove</p>
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
