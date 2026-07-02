import { contact, profile } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";

export function Contact() {
  return (
    <section className="sec contact" id="contact" aria-label="Contact">
      <div className="wrap">
        <Reveal as="div" className="s-head">
          <span className="s-idx mono">{contact.index} / Contact</span>
          <h2 className="s-title">{contact.title}</h2>
        </Reveal>

        <Reveal as="p" className="ct-head">
          {contact.headlineLead}
          <span className="em">{contact.headlineEm}</span>
          {contact.headlineTail}
        </Reveal>

        <div className="ct-grid">
          <Reveal as="div" delay={0.06}>
            <a className="ct-mail" href={`mailto:${profile.email}`}>
              {profile.email} <span className="ar">↗</span>
            </a>
          </Reveal>

          <Reveal as="div" className="ct-links" delay={0.12}>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              <span>GitHub · {profile.links.githubHandle}</span>
              <span className="ar">↗</span>
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              <span>LinkedIn · in/daviduarte</span>
              <span className="ar">↗</span>
            </a>
            <a href={profile.links.resume} target="_blank" rel="noopener noreferrer" download>
              <span>Résumé · PDF</span>
              <span className="ar">↓</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
