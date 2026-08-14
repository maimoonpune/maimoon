import { brands } from "../data/shop";
import "./Brands.css";

export default function Brands() {
  return (
    <div className="container brands-page">
      <span className="eyebrow">Authorised Dealer</span>
      <h1 className="section-title">Brands We Carry</h1>
      <p className="brands-note">
        Maimoon stocks genuine products from the following manufacturers.
        Call the shop to confirm current stock for any specific brand or SKU.
      </p>
      <div className="brands-grid">
        {brands.map((b) => (
          <div className="brand-tile" key={b}>{b}</div>
        ))}
      </div>
    </div>
  );
}
