import { business, placeholderReviews } from "../data/shop";
import "./Reviews.css";

export default function Reviews() {
  return (
    <div className="container reviews-page">
      <span className="eyebrow">Customer Feedback</span>
      <h1 className="section-title">Reviews</h1>

      <div className="reviews-scores">
        <div className="score-card">
          <span className="score-value">{business.ratings.google.score.toFixed(1)} ★</span>
          <span className="score-label">Google · {business.ratings.google.count} reviews</span>
        </div>
        <div className="score-card">
          <span className="score-value">{business.ratings.justdial.score.toFixed(1)} ★</span>
          <span className="score-label">JustDial · {business.ratings.justdial.count} reviews</span>
        </div>
      </div>

      <div className="reviews-notice">
        Our previous customer reviews were lost and are being restored. The cards
        below are placeholders and will be replaced with real feedback.
      </div>

      <div className="reviews-grid">
        {placeholderReviews.map((r, i) => (
          <div className="review-card placeholder" key={i}>
            <div className="review-stars">{"★".repeat(r.rating)}</div>
            <p>{r.text}</p>
            <span className="review-name">— {r.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
