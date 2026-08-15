import { Head } from "vite-react-ssg";
import { business, siteUrl, contactFAQs } from "../data/shop";
import { trackEvent } from "../analytics";
import CopyButton from "../components/CopyButton";
import FAQ from "../components/FAQ";
import "./Contact.css";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFAQs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
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
              <div className="contact-link-row" key={p}>
                <a href={`tel:${p.replace(/\s/g, "")}`} className="contact-link">{p}</a>
                <CopyButton text={p} label={`Copy ${p}`} />
              </div>
            ))}
          </div>

          <div className="contact-block">
            <h2>WhatsApp</h2>
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-rust"
              onClick={() => trackEvent('whatsapp_click', { location: 'contact' })}
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="contact-block">
            <h2>Address</h2>
            <div className="contact-address-row">
              <p>{business.address.line1}<br />{business.address.line2}<br />{business.address.city}</p>
              <CopyButton text={business.address.full} label="Copy full address" />
            </div>
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
          <a href={business.mapDirectionsUrl} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ marginTop: "20px", display: "inline-block" }} onClick={() => trackEvent('maps_directions', { location: 'contact' })}>
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

      <FAQ items={contactFAQs} />
    </div>
  );
}
