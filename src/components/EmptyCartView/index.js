import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img
      src="https://i.postimg.cc/kMjj8dZY/Screenshot-2024-08-01-141617.png"
      className="cart-empty-img"
      alt="cart empty"
    />
    <h1 className="cart-empty-heading">Your Cart Is Empty</h1>

    <Link to="/properties">
      <button type="button" className="shop-now-btn">
        Book Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView