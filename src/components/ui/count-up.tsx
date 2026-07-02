"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animates an integer from 0 → value on first viewport entry (cubic ease-out),
 * with optional static prefix/suffix. The final value is guaranteed: a failsafe
 * finalizes the count even if the IntersectionObserver never fires, and reduced
 * motion jumps straight to the value.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce =
      typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let t0 = 0;
    let started = false;
    let failsafe = 0;

    const run = () => {
      if (started) return;
      started = true;
      if (reduce) {
        setN(value);
        return;
      }
      const dur = 1100;
      const tick = (t: number) => {
        if (!t0) t0 = t;
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setN(Math.round(eased * value));
        if (p < 1) raf = requestAnimationFrame(tick);
        else setN(value);
      };
      raf = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            run();
            io.disconnect();
            clearTimeout(failsafe);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 },
    );
    io.observe(el);
    failsafe = window.setTimeout(() => {
      run();
      io.disconnect();
    }, 2500);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      clearTimeout(failsafe);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {prefix && <span className="pre">{prefix}</span>}
      {n.toLocaleString("en-US")}
      {suffix && <span className="u">{suffix}</span>}
    </span>
  );
}
