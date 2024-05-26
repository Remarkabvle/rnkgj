import React, { useState } from "react";
import "./home.scss";
import heroimg from "../../assets/hero.png";
import apple from "../../assets/apple.svg";
import n from "../../assets/n.png";
import Products from "../../components/products/Products";

const testimonials = [
  {
    name: "Hamza Faizi",
    image: n,
    review:
      "Don’t waste time, just order! This is the best website to purchase smart watches.",
    rating: 5,
  },
  {
    name: "Hafiz Huzaifa",
    image: n,
    review:
      "I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.",
    rating: 5,
  },
];

const brands = [
  {
    name: "Apple",
    description:
      "Apple is one of the most famous smart watches providing company.",
    imgSrc: apple,
  },
  {
    name: "Xiaomi",
    description: "Xiaomi smart watches are produced by Mi company.",
    imgSrc: apple,
  },
  {
    name: "FitBit",
    description:
      "FitBit smart watches are best for their health and fitness features.",
    imgSrc: apple,
  },
];

const StarRating = ({ count }) => {
  return (
    <div>
      {[...Array(count)].map((_, index) => (
        <span key={index}>⭐</span>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="testimonial-image"
      />
      <h3>{testimonial.name}</h3>
      <p>{testimonial.review}</p>
      <StarRating count={testimonial.rating} />
    </div>
  );
};

function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div>
      <header>
        <nav className="navbar container">
          <div className="logo">Mohid</div>
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/recent-products">Recent Products</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
          <div className="icons">
            <a href="/search">
              <i>Search</i>
            </a>
            <a href="/profile">
              <i>User</i>
            </a>
            <a href="/notifications">
              <i>Buy</i>
            </a>
          </div>
        </nav>
        <section className="hero container">
          <div className="hero-content">
            <h1>
              Discover
              <br />
              Most Suitable
              <br />
              Watches
            </h1>
            <p>
              Find the best, reliable, and cheap smart watches here. We focus on
              product quality. Here you can find smart watches of almost all
              brands. So why are you waiting? Just order now!
            </p>
            <div className="search-bar">
              <input type="text" placeholder="Find the best brands" />
              <button>Search</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroimg} alt="Smart Watch" />
          </div>
        </section>
      </header>
      <main>
        <section>
          <div className="brands-section">
            {brands.map((brand, index) => (
              <div className="brand-card" key={index}>
                <img
                  src={brand.imgSrc}
                  alt={brand.name}
                  className="brand-image"
                />
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="container">
          <Products />
        </section>
        <section className="testimonials-section">
          <h2 className="testimonials-section-title">
            Here are some of the best clients.
          </h2>
          <h1 className="testimonials-section-text">
            What People Say About Us
          </h1>
          <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </section>
        <section className="subscribe-container container">
          <div className="subscribe-content">
            <h2 className="subscribe-title">Subscribe To Newsletter</h2>
            <p className="subscribe-subtitle">
              Get free guide about smart watches daily.
            </p>
            <form onSubmit={handleSubmit} className="subscribe-form">
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="subscribe-input"
              />
              <button type="submit" className="subscribe-button">
                Subscribe
              </button>
            </form>
          </div>
          <div className="subscribe-image-container">
            <img src={apple} alt="Smart Watch" className="subscribe-image" />
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>Copyright &copy; 2022 | Mohid</p>
      </footer>
    </div>
  );
}

export default Home;
