import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import { business, categories } from "./data/shop";
import { trackEvent } from "./analytics";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CategoryDetail from "./pages/CategoryDetail";
import Brands from "./pages/Brands";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${business.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { location: 'whatsapp_float' })}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.85 1h0a7.94 7.94 0 0 0 5.55-13.58zm-5.55 12.2h0a6.58 6.58 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.44-.16-.25a6.6 6.6 0 1 1 12.24-3.5 6.56 6.56 0 0 1-6.65 6.6zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64s-.32-.1-.45.1-.5.63-.62.76-.23.15-.43.05a5.4 5.4 0 0 1-1.6-.99 6 6 0 0 1-1.1-1.37c-.12-.2 0-.3.09-.4s.2-.23.3-.35a1.36 1.36 0 0 0 .2-.34.37.37 0 0 0 0-.35c-.05-.1-.45-1.08-.62-1.48s-.33-.33-.45-.34h-.39a.75.75 0 0 0-.54.25 2.28 2.28 0 0 0-.71 1.7 3.96 3.96 0 0 0 .83 2.1 9.06 9.06 0 0 0 3.47 3.07c.48.21.86.33 1.15.42a2.77 2.77 0 0 0 1.27.08 2.08 2.08 0 0 0 1.36-.96 1.68 1.68 0 0 0 .12-.96c-.05-.09-.18-.14-.38-.24z" />
      </svg>
    </a>
  );
}

function CallFloat() {
  return (
    <a
      href={`tel:${business.primaryPhone}`}
      className="call-float"
      aria-label="Call the shop"
      onClick={() => trackEvent('phone_call', { location: 'call_float' })}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.6 21 3 14.4 3 6c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
      </svg>
    </a>
  );
}

function Layout() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CallFloat />
      <ScrollToTop />
    </>
  );
}

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      {
        path: "products/:categoryId",
        element: <CategoryDetail />,
        getStaticPaths: () => categories.map((c) => `products/${c.id}`),
      },
      { path: "brands", element: <Brands /> },
      { path: "about", element: <About /> },
      { path: "reviews", element: <Reviews /> },
      { path: "contact", element: <Contact /> },
      { path: "privacy", element: <Privacy /> },
    ],
  },
];
