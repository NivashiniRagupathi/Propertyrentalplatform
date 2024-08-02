import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext';
import './index.css';

const Header = () => {
  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

    return (
      <nav className="nav-header">
          <Link to="/">
            <img
              className="website-logo"
              src="https://i.postimg.cc/jjrgXRJh/Screenshot-2024-07-31-152254.png"
              alt="website logo"
            />
          </Link>

          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/properties" className="nav-link">
                Rental House
              </Link>

            </li>

            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
                {renderCartItemsCount()}
              </Link>
            </li>
          </ul>
    </nav>
  )
}

export default Header
