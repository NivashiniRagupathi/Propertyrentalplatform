import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
    <>
    <Header />
    <div className="home">
      <header className="hero">
        <h1 className='hero-heading'>Welcome to My Rent House</h1>
        <p className='hero-para'>Your dream rental home awaits. Find the perfect property for your next stay.</p>
        <Link to="/properties" className="cta-button">Browse Rental House</Link>
      </header>

      <section className="features">
        <div className="feature">
          <h2>Wide Selection of Properties</h2>
          <p className='feature-para'>We offer a diverse range of rental properties to suit all tastes and budgets. Whether you're looking for a cozy apartment in the city or a luxurious villa by the beach, we have something for everyone.</p>
        </div>
        <div className="feature">
          <h2>Easy Booking Process</h2>
          <p className='feature-para'>Our user-friendly platform makes it simple to find and book your ideal rental property. With detailed property descriptions, photos, and reviews, you can make an informed decision with ease.</p>
        </div>
        <div className="feature">
          <h2>Exceptional Customer Support</h2>
          <p className='feature-para'>Our dedicated customer support team is here to assist you every step of the way. From helping you choose the right property to answering any questions you may have, we're committed to ensuring your rental experience is seamless and enjoyable.</p>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"The booking process was so easy, and the property was exactly as described. We had a fantastic stay!"</p>
          <cite>- Sarah W.</cite>
        </div>
        <div className="testimonial">
          <p>"Great selection of properties and excellent customer service. Highly recommend this platform."</p>
          <cite>- John D.</cite>
        </div>
        <div className="testimonial">
          <p>"We found the perfect rental for our family vacation. The whole experience was hassle-free."</p>
          <cite>- Emily R.</cite>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 My Rent House. All rights reserved.</p>
        <nav>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms & Conditions</a>
        </nav>
      </footer>
    </div>
    </>
)

export default Home