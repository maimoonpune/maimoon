import { Head } from "vite-react-ssg";
import { business, siteUrl } from "../data/shop";
import "./Reviews.css";

export default function Reviews() {
  return (
    <div className="container reviews-page">
      <Head>
        <title>Reviews — Maimoon Hardware & Plywood, Kondhwa Pune</title>
        <meta
          name="description"
          content={`Maimoon Industrial Hardware — rated ${business.ratings.google.score}★ on Google and ${business.ratings.justdial.score}★ on JustDial. Hardware shop in Kondhwa, Pune.`}
        />
        <link rel="canonical" href={`${siteUrl}/reviews`} />
        <meta property="og:title" content="Reviews — Maimoon Hardware & Plywood, Kondhwa Pune" />
        <meta property="og:url" content={`${siteUrl}/reviews`} />
      </Head>

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

      <div className="reviews-outbound">
        <p className="reviews-outbound-text">
          Read our reviews on{" "}
          <a
            href={business.reviewUrls.google}
            target="_blank"
            rel="noreferrer"
          >
            Google Maps
          </a>
          {business.reviewUrls.justdial && (
            <>
              {" "}or{" "}
              <a
                href={business.reviewUrls.justdial}
                target="_blank"
                rel="noreferrer"
              >
                JustDial
              </a>
            </>
          )}
          .
        </p>
      </div>
    </div>
  );
}
