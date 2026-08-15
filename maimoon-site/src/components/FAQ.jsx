import "./FAQ.css";

export default function FAQ({ items }) {
  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {items.map((item, i) => (
          <details key={i} className="faq-item">
            <summary className="faq-question">{item.question}</summary>
            <p className="faq-answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
