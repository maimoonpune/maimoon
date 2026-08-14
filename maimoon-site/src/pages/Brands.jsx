import { Head } from "vite-react-ssg";
import { brands, siteUrl } from "../data/shop";
import "./Brands.css";

const brandInfo = {
  Addison: "Indian cutting tools manufacturer — drills, taps, dies, end mills, and reamers for machine shops and fabrication units.",
  Venus: "Industrial safety helmets and head protection equipment for construction sites and manufacturing across India.",
  Araldite: "Huntsman's structural epoxy adhesives — two-component systems that form permanent bonds on metal, wood, concrete, and ceramics.",
  CUMI: "Carborundum Universal — cutting discs, grinding wheels, and abrasive media trusted by metalworkers and fabricators.",
  Eurotech: "Industrial cutting and machining tools for workshop and fabrication applications.",
  Taparia: "India's largest hand tool manufacturer — pliers, screwdrivers, spanners, wrenches, and precision measuring tools.",
  Godrej: "Locks, padlocks, and security hardware from one of India's most established manufacturers.",
  "Dr Fixit": "Pidilite's waterproofing brand — Raincoat, Dampblock, Pidifin 2K, and LW+ systems for roofs, walls, and below-grade applications.",
  "JK Files & Tools": "Metalworking files — flat, round, half-round, and triangular — in bastard, second, and smooth cut grades for fitting and finishing.",
  ABRO: "Contact cements, spray paints, tapes, and automotive-grade adhesives for fabricators, upholsterers, and tradespeople.",
  Prince: "PVC and CPVC pipes and fittings for water supply, drainage, and plumbing — one of India's largest pipe manufacturers.",
  Fischer: "German anchor fastening systems — expansion anchors, chemical anchors, and frame fixings for concrete, brick, and masonry.",
  Norton: "Saint-Gobain Abrasives — cutting discs, grinding wheels, and flap discs for metalworking and surface preparation.",
  Tata: "Tata Steel products including structural sections and construction materials for site and fabrication use.",
  DeWalt: "Professional cordless and corded power tools — hammer drills, angle grinders, and circular saws for contractors.",
  HIKOKI: "Professional power tools, formerly Hitachi Power Tools — drills and grinders known for motor durability on worksites.",
  Mangalam: "Construction hardware and building materials stocked for site and general construction applications.",
  Powercord: "Industrial cables and wires — armoured cables, submersible pump cables, and multi-core wires for construction and industrial installations.",
};

export default function Brands() {
  return (
    <div className="container brands-page">
      <Head>
        <title>Brands — Maimoon Hardware &amp; Plywood, Kondhwa Pune</title>
        <meta
          name="description"
          content="Brands stocked at Maimoon Industrial Hardware — authorised dealer for Taparia, DeWalt, HIKOKI, Godrej, Dr Fixit, Fischer, Norton, Araldite and more in Kondhwa, Pune."
        />
        <link rel="canonical" href={`${siteUrl}/brands`} />
        <meta property="og:title" content="Brands — Maimoon Hardware & Plywood, Kondhwa Pune" />
        <meta property="og:url" content={`${siteUrl}/brands`} />
      </Head>

      <span className="eyebrow">Authorised Dealer</span>
      <h1 className="section-title">Brands We Carry</h1>
      <p className="brands-note">
        Maimoon stocks genuine products from the following manufacturers.
        Call the shop to confirm current stock for any specific brand or SKU.
      </p>
      <div className="brands-grid">
        {brands.map((b) => (
          <div className="brand-tile" key={b}>
            <p className="brand-tile-name">{b}</p>
            {brandInfo[b] && (
              <p className="brand-tile-desc">{brandInfo[b]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
