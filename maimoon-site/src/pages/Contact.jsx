import { Head } from "vite-react-ssg";
import { business, siteUrl } from "../data/shop";
import "./Contact.css";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I get to Maimoon Industrial Hardware in Kondhwa, Pune?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maimoon is at Shop No 8, Shanti Heights, S No 54, Katraj-Kondhwa Road, Kondhwa, Pune 411048. From NIBM Road it's a 3-4 minute drive. From Wanowrie or Undri, roughly 10 minutes. Search \"Maimoon Industrial Hardware & Plywood\" on Google Maps — the pin is accurate.",
      },
    },
    {
      "@type": "Question",
      name: "What are Maimoon's opening hours on Sunday?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maimoon is open Sunday 9:30 AM–1:00 PM. Monday to Saturday hours are 9:30 AM–7:30 PM.",
      },
    },
    {
      "@type": "Question",
      name: "Does Maimoon offer delivery for hardware and plywood orders in Pune?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For bulk orders — construction projects, contractor sourcing, or large quantities — ask about delivery when you call on 098230 16058. We can discuss what's possible on a case-by-case basis.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Maimoon Industrial Hardware?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call us on 098230 16058 (primary and WhatsApp), 9595169520, or 9657019021. Open Mon–Sat 9:30 AM–7:30 PM, Sun 9:30 AM–1:00 PM.",
      },
    },
  ],
};

export default function Contact() {
  return (
    <div className="container contact-page">
      <Head>
        <title>Contact &amp; Location — Maimoon Hardware &amp; Plywood, Kondhwa Pune</title>
        <meta
          name="description"
          content={`Find Maimoon Industrial Hardware on Katraj-Kondhwa Road, Kondhwa, Pune — near NIBM Road, Wanowrie, and Undri. Mon–Sat ${business.hours.monSat}, Sun ${business.hours.sun}. Call ${business.phones[0]}.`}
        />
        <link rel="canonical" href={`${siteUrl}/contact`} />
        <meta property="og:title" content="Contact &amp; Location — Maimoon Hardware &amp; Plywood, Kondhwa Pune" />
        <meta property="og:url" content={`${siteUrl}/contact`} />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Head>

      <span className="eyebrow">Kondhwa, Pune</span>
      <h1 className="section-title">Contact &amp; Location</h1>
      <p className="contact-intro">
        Maimoon Industrial Hardware &amp; Plywood is on Katraj-Kondhwa Road in Kondhwa, Pune —
        easily reached from NIBM Road, Wanowrie, Undri, and Bibvewadi. Mon–Sat{" "}
        {business.hours.monSat}, Sun {business.hours.sun}.
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-block">
            <h2>Phone</h2>
            {business.phones.map((p) => (
              <a href={`tel:${p.replace(/\s/g, "")}`} className="contact-link" key={p}>{p}</a>
            ))}
          </div>

          <div className="contact-block">
            <h2>WhatsApp</h2>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-rust"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="contact-block">
            <h2>Address</h2>
            <p>{business.address.line1}<br />{business.address.line2}<br />{business.address.city}</p>
          </div>

          <div className="contact-block">
            <h2>Hours</h2>
            <p>Mon–Sat {business.hours.monSat}<br />Sun {business.hours.sun}</p>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Maimoon Industrial Hardware location map, Kondhwa Pune"
            src={business.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 380 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="contact-section">
        <h2>Finding Maimoon in Kondhwa</h2>
        <p>
          The shop is at <strong>Shop No 8, Shanti Heights, S No 54, Katraj-Kondhwa Road,
          Kondhwa, Pune 411048</strong>. If you're coming from NIBM Road, it's a 3-4 minute
          drive down Katraj-Kondhwa Road. From Wanowrie or Undri, you're roughly 10
          minutes away via the main road. From Bibvewadi, the Katraj-Kondhwa corridor runs
          directly past the area.
        </p>
        <p>
          The closest recognisable landmark is the Kondhwa stretch of Katraj-Kondhwa Road
          itself — the shop is in Shanti Heights, a commercial building on this road. If
          you're using Google Maps or navigation, search for{" "}
          <strong>Maimoon Industrial Hardware &amp; Plywood</strong> and the pin is accurate.
        </p>
        <div className="contact-landmarks">
          <span className="landmark-chip">Near NIBM Road</span>
          <span className="landmark-chip">Near Wanowrie</span>
          <span className="landmark-chip">Near Undri</span>
          <span className="landmark-chip">Near Bibvewadi</span>
          <span className="landmark-chip">Near Katraj</span>
        </div>
        <p className="contact-directions-link">
          <a href={business.mapDirectionsUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop: "20px", display: "inline-block" }}>
            Get Directions on Google Maps
          </a>
        </p>
      </div>

      <div className="contact-section">
        <h2>Serving Contractors and Buyers Across Pune Since 2002</h2>
        <p>
          Maimoon has operated from Kondhwa since 2002 — supplying industrial hardware,
          power tools, hand tools, plywood, adhesives, waterproofing materials, fasteners,
          and electrical supplies to contractors, fabricators, carpenters, plumbers, and
          individual buyers from across Pune.
        </p>
        <p>
          While the shop is based in Kondhwa, buyers regularly make the trip from
          Hadapsar, Wanowrie, Magarpatta, Fatima Nagar, Koregaon Park, and further
          across the city — particularly for specific brands (Fischer anchors, DeWalt
          tools, Dr Fixit waterproofing, Taparia hand tools) where genuine stock and
          counter knowledge matter.
        </p>
        <p>
          For bulk orders — construction projects, contractor sourcing runs, or large
          quantity requirements — ask about delivery when you call. We're happy to
          discuss what's possible on a case-by-case basis.
        </p>
      </div>
    </div>
  );
}
