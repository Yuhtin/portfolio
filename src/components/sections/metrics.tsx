import { metrics } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

export function Metrics() {
  return (
    <section className="metrics-wrap" aria-label="By the numbers">
      <div className="metrics">
        {metrics.map((m, i) => (
          <Reveal as="div" className="m" key={m.label} delay={i * 0.05}>
            <div className="mv">
              <CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} />
            </div>
            <div className="ml">{m.label}</div>
            <div className="mn">{m.note}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
