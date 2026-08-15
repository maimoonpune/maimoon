import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { business, categories, siteUrl, homeFAQs } from "../data/shop";
import { trackEvent } from "../analytics";
import BrandStrip from "../components/BrandStrip";
import FAQ from "../components/FAQ";
import storefront1 from "../assets/photos/storefront-1.png";
import storefront2 from "../assets/photos/storefront-3.png";
import "./Home.css";

const PAGE_TITLE = "Maimoon — Industrial Hardware & Plywood, Kondhwa Pune";
const PAGE_DESC =
  "Maimoon Industrial Hardware & Plywood — trusted hardware shop in Kondhwa, Pune since 2002. Power tools, hand tools, plywood, adhesives, fasteners, paints and more. Authorised dealer for Taparia, DeWalt, HIKOKI, Godrej, Dr Fixit.";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFAQs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  "@id": siteUrl,
  name: business.fullName,
  url: siteUrl,
  telephone: `+${business.whatsapp}`,
  foundingDate: String(business.established),
  priceRange: "₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${business.address.line1}, ${business.address.line2}`,
    addressLocality: "Kondhwa",
    addressRegion: "Maharashtra",
    postalCode: "411048",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.geo.lat,
    longitude: business.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "09:30",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:30",
      closes: "13:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(business.ratings.google.score),
    reviewCount: String(business.ratings.google.count),
    bestRating: "5",
  },
  areaServed: ["Pune", "Kondhwa", "NIBM Road", "Katraj"],
};

export default function Home() {
  const ogImage = `${siteUrl}/storefront-og.png`;

  return (
    <div className="home">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Maimoon Industrial Hardware storefront, Kondhwa Pune" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content={business.fullName} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <section className="hero">
        <img
          src={storefront1}
          alt="Maimoon Industrial Hardware & Plywood storefront in Kondhwa, Pune"
          className="hero-img"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <span className="eyebrow" style={{ color: "var(--paper)" }}>Est. {business.established} · Kondhwa, Pune</span>
          <h1 className="hero-title">
            EVERY<br />FITTING<br />YOU NEED
          </h1>
          <p className="hero-sub">{business.tagline}</p>
          <div className="hero-actions">
            <a href={`tel:${business.primaryPhone}`} className="btn btn-rust" onClick={() => trackEvent('phone_call', { location: 'home_hero' })}>Call the Shop</a>
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
            <Link to={`/products/${c.id}`} className="category-card" key={c.id}>
              {c.products.length > 0 && (
                <span className="category-count">{c.products.length} photos</span>
              )}
              <h3>{c.name}</h3>
              <p>{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-strip">
        <div className="container about-strip-inner">
          <img
            src={storefront2}
            alt="Maimoon Industrial Hardware & Plywood shopfront, Kondhwa Pune"
            className="about-strip-img"
          />
          <div>
            <span className="eyebrow">Since {business.established}</span>
            <h2 className="section-title">A Neighbourhood Fixture for Two Decades</h2>
            <p className="about-strip-text">
              Maimoon is a trusted hardware shop in Kondhwa, Pune — supplying
              industrial hardware, tools, and plywood to laborers, contractors,
              and buyers across Pune for over twenty years. Authorised dealer
              for Taparia, DeWalt, HIKOKI, Godrej, and more.
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
          <p className="hours-text">Mon–Sat {business.hours.monSat} · Sun {business.hours.sun}</p>
        </div>
        <a href={business.mapDirectionsUrl} target="_blank" rel="noreferrer" className="btn btn-rust" onClick={() => trackEvent('maps_directions', { location: 'home' })}>
          Get Directions
        </a>
      </section>

      <div className="container">
        <FAQ items={homeFAQs} />
      </div>
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
