import { Fragment, type ReactNode } from "react";

/**
 * Wraps each given phrase found in `text` with <span class="em"> (the emerald
 * accent). Phrases are matched in order, first occurrence each, non-overlapping.
 */
export function Emph({ text, phrases }: { text: string; phrases: readonly string[] }): ReactNode {
  // Build a list of [start,end] match ranges, earliest non-overlapping wins.
  const ranges: { start: number; end: number }[] = [];
  for (const phrase of phrases) {
    const i = text.indexOf(phrase);
    if (i === -1) continue;
    if (ranges.some((r) => i < r.end && i + phrase.length > r.start)) continue;
    ranges.push({ start: i, end: i + phrase.length });
  }
  ranges.sort((a, b) => a.start - b.start);

  const out: ReactNode[] = [];
  let cursor = 0;
  ranges.forEach((r, idx) => {
    if (r.start > cursor) out.push(<Fragment key={`t${idx}`}>{text.slice(cursor, r.start)}</Fragment>);
    out.push(
      <span className="em" key={`e${idx}`}>
        {text.slice(r.start, r.end)}
      </span>,
    );
    cursor = r.end;
  });
  if (cursor < text.length) out.push(<Fragment key="tail">{text.slice(cursor)}</Fragment>);
  return <>{out}</>;
}
