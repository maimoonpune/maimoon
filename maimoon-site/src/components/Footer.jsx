import { Link } from "react-router-dom";
import { business } from "../data/shop";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="signage-rule" />
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">MAIMOON</div>
          <p className="footer-tagline">{business.tagline}</p>
        </div>

        <div>
          <div className="footer-heading">Visit</div>
          <p className="footer-text">{business.address.line1}<br />{business.address.line2}<br />{business.address.city}</p>
        </div>

        <div>
          <div className="footer-heading">Contact</div>
          {business.phones.map((p) => (
            <p className="footer-text" key={p}><a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a></p>
          ))}
        </div>

        <div>
          <div className="footer-heading">Explore</div>
          <p className="footer-text"><Link to="/products">Products</Link></p>
          <p className="footer-text"><Link to="/brands">Brands</Link></p>
          <p className="footer-text"><Link to="/reviews">Reviews</Link></p>
          <p className="footer-text"><Link to="/contact">Contact</Link></p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} Maimoon Industrial Hardware &amp; Plywood. Est. {business.established}.</span>
      </div>
    </footer>
  );
}
