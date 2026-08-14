import { business } from "../data/shop";
import signage from "../assets/photos/signage-1.png";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <div className="container about-hero">
        <span className="eyebrow">Since {business.established}</span>
        <h1 className="section-title">About Maimoon</h1>
        <p className="about-lead">
          For over two decades, Maimoon has been a trusted source of industrial
          hardware and plywood in Kondhwa, Pune — serving everyone from daily-wage
          laborers to contractors and industrial buyers.
        </p>
      </div>

      <img src={signage} alt="Maimoon signage listing carried brands" className="about-signage-img" />

      <div className="container about-body">
        <div className="about-block">
          <h2>What We Stock</h2>
          <p>
            Industrial hardware, hand and power tools, plywood, adhesives and
            sealants, waterproofing products, fasteners, and general hardware —
            all under one roof. We are authorised dealers for major brands
            including Taparia, DeWalt, HIKOKI, Godrej, and Dr Fixit.
          </p>
        </div>
        <div className="about-block">
          <h2>Who We Serve</h2>
          <p>
            Our counter serves two kinds of customers equally well: the laborer
            who needs a single fitting fast, and the industrial buyer sourcing
            in bulk. Straightforward pricing, in-stock availability, and staff
            who know the inventory.
          </p>
        </div>
        <div className="about-block">
          <h2>Where We Are</h2>
          <p>{business.address.full}</p>
          <p className="about-hours">Open all days · {business.hours.weekdays}</p>
        </div>
      </div>
    </div>
  );
}
