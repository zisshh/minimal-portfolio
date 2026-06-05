import { profile } from "@/content/profile";

export function Quote() {
  return (
    <figure className="text-center">
      <blockquote className="text-[15px] italic leading-[1.8] text-fg-muted">
        &ldquo;{profile.quote.text}&rdquo;
      </blockquote>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
        — {profile.quote.author}
      </figcaption>
    </figure>
  );
}
