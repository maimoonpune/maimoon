import { useEffect, useState } from "react";
import "./ScrollToTop.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    function check() { setVisible(window.scrollY > 400); }
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);
  return (
    <button
      className={`scroll-top-btn${visible ? " visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
