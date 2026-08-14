import { useParams, Link, Navigate } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { categories, business, siteUrl } from "../data/shop";
import { categoryContent } from "../data/categoryContent";
import "./Products.css";
import "./CategoryDetail.css";

export default function CategoryDetail() {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const content = categoryContent[categoryId];

  if (!category) return <Navigate to="/products" replace />;

  const relatedCategories = (content?.relatedIds ?? [])
    .map((id) => categories.find((c) => c.id === id))
    .filter(Boolean);

  const metaDesc = content?.paragraphs?.[0]
    ? content.paragraphs[0].slice(0, 155).replace(/—[^—]*$/, "").trim() + "…"
    : category.description;

  const faqJsonLd = content?.faqs?.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  } : null;

  return (
    <div className="container category-detail-page">
      <Head>
        <title>{category.name} — Maimoon Hardware &amp; Plywood, Kondhwa Pune</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={`${siteUrl}/products/${categoryId}`} />
        <meta property="og:title" content={`${category.name} — Maimoon Hardware & Plywood, Kondhwa Pune`} />
        <meta property="og:url" content={`${siteUrl}/products/${categoryId}`} />
        {faqJsonLd && <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>}
      </Head>

      <nav className="cd-breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to="/products">Products</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{category.name}</span>
      </nav>

      <span className="eyebrow">Product Category</span>
      <h1 className="section-title">{category.name}</h1>
      <p className="cd-lead">{category.description}</p>

      {content?.paragraphs && (
        <div className="cd-body">
          {content.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}

      {category.products.length > 0 && (
        <div className="cd-photos">
          <h2 className="cd-section-heading">From Our Shop Floor</h2>
          <div className="products-grid">
            {category.products.map((p, i) => (
              <div className="product-card" key={i}>
                <div className="product-img-wrap">
                  <img
                    src={p.image}
                    alt={p.alt || p.name}
                    loading="lazy"
                    className="product-img"
                    width="400"
                    height="300"
                  />
                </div>
                <p className="product-name">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedCategories.length > 0 && (
        <div className="cd-related">
          <h2 className="cd-section-heading">Related Categories</h2>
          <div className="cd-related-grid">
            {relatedCategories.map((c) => (
              <Link to={`/products/${c.id}`} className="cd-related-card" key={c.id}>
                <strong>{c.name}</strong>
                <span>{c.description}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="cd-cta">
        <p>Call the shop to check current stock or ask about specific brands and quantities.</p>
        <div className="cd-cta-actions">
          <a href={`tel:${business.primaryPhone}`} className="btn btn-rust">Call the Shop</a>
          <Link to="/contact" className="btn btn-outline">Visit &amp; Directions</Link>
        </div>
      </div>
    </div>
  );
}
