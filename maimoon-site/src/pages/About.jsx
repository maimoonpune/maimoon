import { Head } from "vite-react-ssg";
import { business, siteUrl } from "../data/shop";
import signage from "../assets/photos/signage-1.png";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <Head>
        <title>About — Maimoon Industrial Hardware & Plywood, Kondhwa Pune</title>
        <meta
          name="description"
          content="About Maimoon Industrial Hardware & Plywood — a hardware shop in Kondhwa, Pune since 2002. Serving laborers, contractors, and industrial buyers across Pune."
        />
        <link rel="canonical" href={`${siteUrl}/about`} />
        <meta property="og:title" content="About — Maimoon Industrial Hardware & Plywood, Kondhwa Pune" />
        <meta property="og:url" content={`${siteUrl}/about`} />
      </Head>

      <div className="container about-hero">
        <span className="eyebrow">Since {business.established}</span>
        <h1 className="section-title">About Maimoon</h1>
        <p className="about-lead">
          For over two decades, Maimoon has been a trusted industrial hardware
          shop in Kondhwa, Pune — serving everyone from daily-wage laborers to
          contractors and industrial buyers across the city.
        </p>
      </div>

      <img
        src={signage}
        alt="Maimoon brand signboard showing Taparia, DeWalt, HIKOKI and more — Kondhwa Pune"
        className="about-signage-img"
      />

      <div className="container about-body">
        <div className="about-block">
          <h2>What We Stock</h2>
          <p>
            Industrial hardware, hand and power tools, plywood, adhesives and
            sealants, waterproofing products, fasteners, pipes, and general
            hardware — all under one roof in Kondhwa, Pune. We are authorised
            dealers for major brands including Taparia, DeWalt, HIKOKI, Godrej,
            and Dr Fixit.
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
          <p className="about-hours">Mon–Sat {business.hours.monSat} · Sun {business.hours.sun}</p>
        </div>
      </div>
    </div>
  );
}
