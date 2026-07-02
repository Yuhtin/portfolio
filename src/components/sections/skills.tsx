import { skills } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { Tech } from "@/components/ui/tech";

export function Skills() {
  return (
    <section className="sec" id="stack" aria-label="Stack">
      <div className="wrap">
        <Reveal as="div" className="s-head">
          <span className="s-idx mono">{skills.index} / Stack</span>
          <h2 className="s-title">{skills.title}</h2>
          <span className="s-kick mono">{skills.kick}</span>
        </Reveal>

        <Reveal as="div" className="skill-grid">
          {skills.groups.map((g, i) => (
            <div className="skg" key={g.key}>
              <div className="skn mono">
                <span className="ix">{String(i + 1).padStart(2, "0")}</span> {g.key}
              </div>
              <div className="items">
                {g.items.map((s) => (
                  <Tech key={s} name={s} />
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
