import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, brands } from "../data/shop";
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
    return categories.filter((c) => {
      const matchesCategory = activeCategory === "all" || c.id === activeCategory;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        brands.some((b) => b.toLowerCase().includes(q) && c.description.toLowerCase().includes(b.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
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
      <span className="eyebrow">Catalog</span>
      <h1 className="section-title">Products</h1>
      <p className="products-note">
        Full product photos (700+) are being imported from our JustDial catalog.
        Categories below are placeholders — real listings replace these shortly.
      </p>

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
        />
        <div className="products-filters">
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
        <p className="products-empty">No categories match "{query}". Try a different search or call the shop directly.</p>
      ) : (
        <div className="products-grid">
          {filtered.map((c) => (
            <div className="product-card" key={c.id}>
              <div className="product-card-thumb">{c.name.slice(0, 2).toUpperCase()}</div>
              <div className="product-card-count">{c.placeholderCount}+ items</div>
              <h3>{c.name}</h3>
              <p>{c.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
