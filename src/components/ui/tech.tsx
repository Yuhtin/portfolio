import { techIcon, techIsDark } from "@/lib/tech-icons";

/** A monospace tech chip with an optional devicon brand glyph. */
export function Tech({ name }: { name: string }) {
  const url = techIcon(name);
  const dk = url && techIsDark(name);
  return (
    <span className={`tech${dk ? " dk" : ""}`}>
      {url && (
        // eslint-disable-next-line @next/next/no-img-element -- tiny remote brand glyph, no optimization needed
        <img src={url} alt="" loading="lazy" width={14} height={14} />
      )}
      {name}
    </span>
  );
}
