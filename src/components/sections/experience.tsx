import { experience } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { Tech } from "@/components/ui/tech";

export function Experience() {
  return (
    <section className="sec" id="experience" aria-label="Experience">
      <div className="wrap">
        <Reveal as="div" className="s-head">
          <span className="s-idx mono">{experience.index} / Experience</span>
          <h2 className="s-title">{experience.title}</h2>
          <span className="s-kick mono">{experience.kick}</span>
        </Reveal>

        <div>
          {experience.roles.map((x, i) => {
            const highlight = "highlight" in x && x.highlight;
            return (
              <Reveal as="div" className="xp-row" key={x.org} delay={Math.min(i * 0.04, 0.16)}>
                <div className={`xp-head${highlight ? " hl" : ""}`}>
                  <div className="xp-date mono">{x.date}</div>
                  <h3 className="xp-org">{x.org}</h3>
                  <div className="xp-role mono">{x.role}</div>
                  <div className="xp-stack">
                    {x.stack.map((s) => (
                      <Tech key={s} name={s} />
                    ))}
                  </div>
                </div>
                <ul className="xp-bullets">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
