import { useState } from "react";
import "./CopyButton.css";

export default function CopyButton({ text, label = "Copy to clipboard" }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      className={`copy-btn${copied ? " copied" : ""}`}
      onClick={handleCopy}
      aria-label={copied ? "Copied!" : label}
      title={copied ? "Copied!" : label}
    >
      {copied ? (
        <span className="copy-feedback">Copied!</span>
      ) : (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
    </button>
  );
}
