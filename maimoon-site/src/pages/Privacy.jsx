import { Head } from "vite-react-ssg";
import { business, siteUrl } from "../data/shop";
import "./Privacy.css";

const LAST_UPDATED = "15 August 2025";

export default function Privacy() {
  return (
    <div className="container privacy-page">
      <Head>
        <title>Privacy Policy — Maimoon Industrial Hardware &amp; Plywood</title>
        <meta name="description" content="Privacy policy for maimoon.in — how analytics data is collected and used on this site." />
        <link rel="canonical" href={`${siteUrl}/privacy`} />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <h1 className="section-title">Privacy Policy</h1>
      <p className="privacy-meta">Last updated: {LAST_UPDATED}</p>

      <p className="privacy-body">
        This is the website for Maimoon Industrial Hardware &amp; Plywood, a hardware shop in
        Kondhwa, Pune. This policy explains what data is collected when you visit this site
        and how it is used.
      </p>

      <h2 className="privacy-heading">What data is collected</h2>
      <p className="privacy-body">
        This site uses Google Analytics 4 (GA4) to understand how visitors use it — which
        pages are visited, roughly where visitors are located (country and city level), what
        device and browser they use, and how they found the site. We also track clicks on
        key actions: calling the shop, messaging on WhatsApp, and opening directions in
        Google Maps.
      </p>
      <p className="privacy-body">
        GA4 does not collect your name, email address, or phone number. This site has no
        signup forms, no user accounts, and no registration — you do not submit personal
        data to us at any point.
      </p>
      <p className="privacy-body">
        Analytics data is collected and stored by Google. You can read Google's privacy
        policy at{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2 className="privacy-heading">Cookies</h2>
      <p className="privacy-body">
        Google Analytics sets cookies in your browser to distinguish visitors and measure
        sessions. These are analytics cookies only — this site does not set advertising,
        marketing, or social-media tracking cookies.
      </p>

      <h2 className="privacy-heading">What we do not do</h2>
      <p className="privacy-body">
        We do not sell, share, or rent any visitor data to any third party. Analytics data
        is used only to understand how the site is being used so we can improve it.
      </p>

      <h2 className="privacy-heading">External links</h2>
      <p className="privacy-body">
        This site links to WhatsApp, Google Maps, Google Business, and JustDial. Once you
        navigate to those services, their own privacy policies apply.
      </p>

      <h2 className="privacy-heading">Contact</h2>
      <p className="privacy-body">
        If you have questions about this policy, you can contact the shop directly:
      </p>
      <ul className="privacy-list">
        <li>
          Phone:{" "}
          <a href={`tel:${business.primaryPhone}`}>{business.phones[0]}</a>
        </li>
        <li>
          WhatsApp:{" "}
          <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer">
            Message on WhatsApp
          </a>
        </li>
        <li>Address: {business.address.full}</li>
      </ul>
    </div>
  );
}
