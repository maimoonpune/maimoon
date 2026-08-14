import { brands } from "../data/shop";
import "./BrandStrip.css";

export default function BrandStrip() {
  const doubled = [...brands, ...brands];
  return (
    <div className="brand-strip">
      <div className="brand-strip-track">
        {doubled.map((b, i) => (
          <span className="brand-strip-item" key={`${b}-${i}`}>{b}</span>
        ))}
      </div>
    </div>
  );
}
