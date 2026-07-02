"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/content/profile";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="wrap">
          <a className="brand" href="#top" onClick={() => setOpen(false)}>
            <span className="sq" aria-hidden="true" />
            Davi Duarte
          </a>

          <div className="nav-links">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                <span className="n">{item.n}</span>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-cta">
            <a
              className="resume mono"
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Résumé ↓
            </a>
            <button
              className={`menu-btn${open ? " open" : ""}`}
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`msheet${open ? " open" : ""}`} id="msheet">
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            <span>{item.label}</span>
            <span className="n mono">{item.n}</span>
          </a>
        ))}
        <a
          href={profile.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          download
          onClick={() => setOpen(false)}
        >
          <span>Résumé</span>
          <span className="n mono">↓ PDF</span>
        </a>
      </div>
    </>
  );
}
