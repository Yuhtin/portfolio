"use client";

import { createElement, useEffect, useRef, useState, type ReactNode } from "react";

type Tag =
  | "div"
  | "section"
  | "header"
  | "footer"
  | "p"
  | "h1"
  | "h2"
  | "figure"
  | "article"
  | "ul"
  | "li"
  | "span";

/**
 * Reveals its children once, on first viewport entry: a ~20px rise + fade.
 *
 * Robustness: the *base* state (.rv) is fully visible. Only when JS is active
 * (html.js-rv, set pre-paint) is the hidden pre-state applied — so the page is
 * never blank without JS. An IntersectionObserver adds `.in` to animate in; a
 * failsafe timer guarantees nothing stays hidden if the observer never fires.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setShown(true);
      io.disconnect();
      clearTimeout(timer);
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    io.observe(el);
    // safety net: if the observer never fires (anchor jump, fast scroll, off-screen), reveal anyway
    const timer = setTimeout(reveal, 2500);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createElement(
    as,
    {
      ref,
      className: [className, "rv", shown ? "in" : ""].filter(Boolean).join(" "),
      style: delay ? { transitionDelay: `${delay}s` } : undefined,
    },
    children,
  );
}
