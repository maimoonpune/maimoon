import { business } from "../data/shop";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="container contact-page">
      <span className="eyebrow">Get In Touch</span>
      <h1 className="section-title">Contact Us</h1>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-block">
            <h3>Phone</h3>
            {business.phones.map((p) => (
              <a href={`tel:${p.replace(/\s/g, "")}`} className="contact-link" key={p}>{p}</a>
            ))}
          </div>

          <div className="contact-block">
            <h3>WhatsApp</h3>
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
            <h3>Address</h3>
            <p>{business.address.line1}<br />{business.address.line2}<br />{business.address.city}</p>
          </div>

          <div className="contact-block">
            <h3>Hours</h3>
            <p>Open all days · {business.hours.weekdays}</p>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Maimoon location map"
            src={business.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 380 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
