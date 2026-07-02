import Image from "next/image";
import { Fragment } from "react";
import { hero } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <header className="hero" aria-label="Intro">
      <div className="wrap">
        <Reveal as="div" className="hero-top">
          <span>
            {hero.index} · {hero.eyebrow}
          </span>
          <span className="status">
            <span className="dot" aria-hidden="true" />
            {hero.status}
          </span>
        </Reveal>

        <div className="hero-main">
          <div className="hero-left">
            <Reveal as="h1" className="hero-name" delay={0.05}>
              {hero.nameLines[0]}
              <br />
              {hero.nameLines[1]}
              <span className="pd">.</span>
            </Reveal>

            <Reveal as="p" className="hero-role" delay={0.1}>
              {hero.roleLead}
              <b>{hero.roleBold}</b>
              {hero.roleTail}
            </Reveal>

            <Reveal as="div" className="hero-ctas" delay={0.16}>
              {hero.ctas.map((c) => (
                <a
                  key={c.label}
                  className={`btn${c.accent ? " btn-acc" : ""}`}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(c.label === "Résumé" ? { download: true } : {})}
                >
                  {c.label} <span className="ar">{c.arrow}</span>
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal as="figure" className="fig" delay={0.12}>
            <div className="fig-img">
              <Image
                src={hero.figure.src}
                alt={hero.figure.alt}
                fill
                sizes="(max-width: 760px) 100vw, 40vw"
                priority
              />
            </div>
            <figcaption className="fig-cap mono">
              <span>
                {hero.figure.capLeftStatic}
                <span className="em">{hero.figure.capLeftEm}</span>
              </span>
              <span>{hero.figure.capRight}</span>
            </figcaption>
          </Reveal>
        </div>

        <Reveal as="div" className="spec" delay={0.12}>
          {hero.spec.map((cell) => {
            const body = cell.lines.map((l, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {l}
              </Fragment>
            ));
            return (
              <div className="cell" key={cell.k}>
                <div className="k">{cell.k}</div>
                <div className="v">
                  {"strong" in cell && cell.strong ? <b>{body}</b> : body}
                  {"sub" in cell && cell.sub && (
                    <>
                      <br />
                      <span className="sub">{cell.sub}</span>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </header>
  );
}
