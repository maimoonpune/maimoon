import { Link } from "react-router-dom";
import { business, categories } from "../data/shop";
import BrandStrip from "../components/BrandStrip";
import storefront1 from "../assets/photos/storefront-1.png";
import storefront2 from "../assets/photos/storefront-2.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img src={storefront1} alt="Maimoon Industrial Hardware storefront in Kondhwa, Pune" className="hero-img" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow" style={{ color: "var(--paper)" }}>Est. {business.established} · Kondhwa, Pune</span>
          <h1 className="hero-title">
            EVERY<br />FITTING<br />YOU NEED
          </h1>
          <p className="hero-sub">{business.tagline}</p>
          <div className="hero-actions">
            <a href={`tel:${business.primaryPhone}`} className="btn btn-rust">Call the Shop</a>
            <Link to="/products" className="btn btn-outline">Browse Products</Link>
          </div>
          <div className="hero-rating">
            <RatingBadge score={business.ratings.google.score} count={business.ratings.google.count} label="Google" />
            <RatingBadge score={business.ratings.justdial.score} count={business.ratings.justdial.count} label="JustDial" />
          </div>
        </div>
      </section>

      <BrandStrip />

      <section className="container section">
        <span className="eyebrow">What we stock</span>
        <h2 className="section-title">Browse by Category</h2>
        <div className="category-grid">
          {categories.map((c) => (
            <Link to={`/products?category=${c.id}`} className="category-card" key={c.id}>
              <span className="category-count">{c.placeholderCount}+ items</span>
              <h3>{c.name}</h3>
              <p>{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-strip">
        <div className="container about-strip-inner">
          <img src={storefront2} alt="Maimoon shopfront" className="about-strip-img" />
          <div>
            <span className="eyebrow">Since {business.established}</span>
            <h2 className="section-title">A Neighbourhood Fixture for Two Decades</h2>
            <p className="about-strip-text">
              Maimoon has supplied hardware, tools, and plywood to laborers, contractors,
              and industrial buyers across Kondhwa for over twenty years. Authorised
              dealer for Taparia, DeWalt, HIKOKI, Godrej, and more.
            </p>
            <Link to="/about" className="btn btn-outline">Our Story</Link>
          </div>
        </div>
      </section>

      <section className="container section contact-cta">
        <div>
          <span className="eyebrow">Visit or call</span>
          <h2 className="section-title">{business.address.city}</h2>
          <p className="about-strip-text">{business.address.line1}, {business.address.line2}</p>
          <p className="hours-text">Open all days · {business.hours.weekdays}</p>
        </div>
        <a href={business.mapDirectionsUrl} target="_blank" rel="noreferrer" className="btn btn-rust">
          Get Directions
        </a>
      </section>
    </div>
  );
}

function RatingBadge({ score, count, label }) {
  return (
    <div className="rating-badge">
      <span className="rating-score">{score.toFixed(1)} ★</span>
      <span className="rating-meta">{label} · {count} reviews</span>
    </div>
  );
}
