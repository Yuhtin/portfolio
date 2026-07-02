"use client";

import { useEffect, useState } from "react";
import { footer } from "@/content/profile";

export function SiteFooter() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="foot">
      <div className="wrap">
        <span>
          {footer.lineStatic}
          <span className="em">{footer.lineEm}</span>
        </span>
        <span>
          © {year} · {footer.built}
        </span>
        <button
          type="button"
          className="to-top mono"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
