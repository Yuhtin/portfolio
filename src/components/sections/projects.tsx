import Image from "next/image";
import { projects } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { Tech } from "@/components/ui/tech";

export function Projects() {
  const feat = projects.items.filter((p): boolean => p.featured);
  const rest = projects.items.filter((p): boolean => !p.featured);

  return (
    <section className="sec" id="work" aria-label="Selected work">
      <div className="wrap">
        <Reveal as="div" className="s-head">
          <span className="s-idx mono">{projects.index} / Selected Work</span>
          <h2 className="s-title">{projects.title}</h2>
          <span className="s-kick mono">{projects.kick}</span>
        </Reveal>

        <div className="work-grid">
          {feat.map((p, i) => {
            const ghHref = p.links.github ?? null;
            const barUrl = p.live ?? (ghHref ? ghHref.replace(/^https?:\/\//, "") : null);
            const linkHref = p.live ? `https://${p.live}` : ghHref;
            return (
            <Reveal as="article" className="pcard" key={p.name} delay={(i % 2) * 0.08}>
              {p.cover ? (
                <div className="pcover">
                  <div className="bar" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    {barUrl && <span className="url">{barUrl}</span>}
                  </div>
                  <Image src={p.cover} alt={`${p.name} preview`} fill sizes="(max-width: 760px) 100vw, 560px" />
                </div>
              ) : (
                <div className="pcover is-placeholder" aria-hidden="true">
                  <div className="ph">
                    <div className="ph-name">{p.name}</div>
                    <div className="ph-kind">{p.kind}</div>
                  </div>
                </div>
              )}

              <div className="pbody">
                <span className="idx mono">{String(i + 1).padStart(2, "0")}</span>
                <div className="kind">{p.kind}</div>
                <h3 className="pname">{p.name}</h3>
                <p className="pblurb">{p.blurb}</p>
                {p.award && <div className="award mono">◆&nbsp;{p.award.full}</div>}
                <div className="pstack">
                  {p.stack.map((s) => (
                    <Tech key={s} name={s} />
                  ))}
                </div>
                {linkHref ? (
                  <a
                    className="plive mono"
                    href={linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {barUrl} <span className="ar">↗</span>
                  </a>
                ) : (
                  <div className="plive mono muted">
                    private / case study <span className="ar">→</span>
                  </div>
                )}
              </div>
            </Reveal>
            );
          })}
        </div>

        <div className="work-more">
          {rest.map((p, i) => (
            <Reveal as="div" className="mrow" key={p.name} delay={Math.min(i * 0.04, 0.16)}>
              <div className="l">
                <span className="mn mono">{String(feat.length + i + 1).padStart(2, "0")}</span>
                <span className="mt">{p.name}</span>
                <span className="mk mono">{p.kind}</span>
                {p.award && <span className="chip acc">◆ {p.award.short}</span>}
              </div>
              <div className="r mono">{p.stack.slice(0, 3).join(" · ")}</div>
              <p className="md">{p.blurb}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
