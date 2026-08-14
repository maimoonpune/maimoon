import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { business } from "../data/shop";
import "./Header.css";

export default function Header() {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?q=${encodeURIComponent(query.trim())}`);
      setMenuOpen(false);
    }
  }

  return (
    <header className="site-header">
      <div className="signage-rule" />
      <div className="container header-row">
        <Link to="/" className="brand-mark" onClick={() => setMenuOpen(false)}>
          <span className="brand-name">MAIMOON</span>
          <span className="brand-sub">Industrial Hardware · Plywood</span>
        </Link>

        <form className="header-search" onSubmit={handleSearch} role="search">
          <input
            type="text"
            placeholder="Search products, brands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search products"
          />
          <button type="submit" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>

        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>Products</NavLink>
          <NavLink to="/brands" onClick={() => setMenuOpen(false)}>Brands</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/reviews" onClick={() => setMenuOpen(false)}>Reviews</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <a
            className="header-call"
            href={`tel:${business.primaryPhone}`}
          >
            Call Now
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
