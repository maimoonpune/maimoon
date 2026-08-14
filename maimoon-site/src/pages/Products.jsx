import { useMemo, useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { categories, brands, business, siteUrl } from "../data/shop";
import "./Products.css";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");
  const [activeCategory, setActiveCategory] = useState(params.get("category") || "all");

  useEffect(() => {
    setQuery(params.get("q") || "");
    setActiveCategory(params.get("category") || "all");
  }, [params]);

  const filtered = useMemo(() => {
    return categories
      .map((c) => {
        const matchesCategory = activeCategory === "all" || c.id === activeCategory;
        if (!matchesCategory) return null;

        const q = query.trim().toLowerCase();
        if (!q) return c;

        const categoryMatches =
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          brands.some((b) => b.toLowerCase().includes(q) && c.description.toLowerCase().includes(b.toLowerCase()));

        if (categoryMatches) return c;

        const matchingProducts = c.products.filter((p) =>
          p.name.toLowerCase().includes(q)
        );
        if (matchingProducts.length > 0) return { ...c, products: matchingProducts };

        return null;
      })
      .filter(Boolean);
  }, [activeCategory, query]);

  function updateFilters(next) {
    const p = new URLSearchParams(params);
    Object.entries(next).forEach(([k, v]) => {
      if (v && v !== "all") p.set(k, v);
      else p.delete(k);
    });
    setParams(p);
  }

  return (
    <div className="container products-page">
      <Head>
        <title>Products — Maimoon Hardware & Plywood, Kondhwa Pune</title>
        <meta
          name="description"
          content={`Browse ${business.fullName}'s catalog — power tools, hand tools, plywood, adhesives, fasteners, paints, electricals and more. Hardware shop in Kondhwa, Pune.`}
        />
        <link rel="canonical" href={`${siteUrl}/products`} />
        <meta property="og:title" content="Products — Maimoon Hardware & Plywood, Kondhwa Pune" />
        <meta property="og:url" content={`${siteUrl}/products`} />
      </Head>

      <span className="eyebrow">Catalog</span>
      <h1 className="section-title">Products</h1>

      <div className="products-toolbar">
        <input
          type="text"
          placeholder="Search products or brands..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            updateFilters({ q: e.target.value });
          }}
          className="products-search"
          aria-label="Search products"
        />
        <div className="products-filters" role="group" aria-label="Filter by category">
          <button
            className={activeCategory === "all" ? "filter-chip active" : "filter-chip"}
            onClick={() => { setActiveCategory("all"); updateFilters({ category: "all" }); }}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              className={activeCategory === c.id ? "filter-chip active" : "filter-chip"}
              onClick={() => { setActiveCategory(c.id); updateFilters({ category: c.id }); }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="products-empty">No products match &ldquo;{query}&rdquo;. Try a different search or call the shop directly.</p>
      ) : (
        filtered.map((c) => (
          <section className="category-section" key={c.id}>
            <div className="category-section-header">
              <h2 className="category-section-title">
                <Link to={`/products/${c.id}`}>{c.name}</Link>
              </h2>
              {c.products.length > 0 && (
                <span className="category-product-count">{c.products.length} photos</span>
              )}
            </div>
            <p className="category-section-desc">{c.description}</p>

            {c.products.length > 0 ? (
              <div className="products-grid">
                {c.products.map((p, i) => (
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
            ) : (
              <div className="products-empty-category">
                Product photos coming soon — <Link to="/contact">call the shop</Link> to check current stock.
                {" "}<Link to={`/products/${c.id}`} className="cd-more-link">Read more about this category →</Link>
              </div>
            )}
          </section>
        ))
      )}
    </div>
  );
}
