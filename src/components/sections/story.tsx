import { story } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { Emph } from "@/components/ui/emph";

export function Story() {
  return (
    <section className="sec" id="story" aria-label="Story">
      <div className="col-guides" aria-hidden="true" />
      <div className="wrap">
        <Reveal as="div" className="s-head">
          <span className="s-idx mono">{story.index} / Story</span>
          <h2 className="s-title">{story.title}</h2>
          <span className="s-kick mono">{story.kick}</span>
        </Reveal>

        <Reveal as="p" className="story-intro">
          <Emph text={story.intro} phrases={story.introEm} />
        </Reveal>
        <Reveal as="p" className="story-lead" delay={0.06}>
          {story.lead}
        </Reveal>

        <div className="tl">
          {story.milestones.map((t, i) => (
            <Reveal
              as="div"
              className={`tl-item${t.highlight ? " hl" : ""}`}
              key={`${t.year}-${t.title}`}
              delay={Math.min(i * 0.03, 0.18)}
            >
              <div className="tl-year mono">
                <span className="nd" aria-hidden="true" />
                {t.year}
              </div>
              <div className="tl-main">
                <div className="tl-title">
                  {t.title}
                  {t.highlight && <span className="feat"> ★ now</span>}
                </div>
                <p className="tl-body">{t.body}</p>
                <div className="tl-tags">
                  {t.tags.map((tag, j) => (
                    <span className={`chip${t.highlight && j === 0 ? " acc" : ""}`} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="story-close">
          <Emph text={story.close} phrases={story.closeEm} />
        </Reveal>
      </div>
    </section>
  );
}
