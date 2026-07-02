import { watching } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";

export function Watching() {
  return (
    <section className="sec" id="watching" aria-label="Off the clock">
      <div className="wrap">
        <Reveal as="div" className="s-head">
          <span className="s-idx mono">{watching.index}</span>
          <h2 className="s-title">{watching.title}</h2>
          <span className="s-kick mono">{watching.kick}</span>
        </Reveal>

        <Reveal as="div" className="tubes">
          {watching.channels.map((c) => (
            <a
              key={c.name}
              className="tube"
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="tx">
                <span className="tn">{c.name}</span>
                <span className="tt">{c.topic}</span>
              </span>
              <span className="ar" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
