"use client";

import { useEffect, useRef, useState } from "react";

interface LivePreviewProps {
  src: string;
  title: string;
}

// Desktop render size that gets scaled down to the card width (16:10).
const BASE_W = 1280;
const BASE_H = 800;

/**
 * A live, scaled-down iframe of a website used as an interactive thumbnail.
 * Sandboxed without `allow-top-navigation` so the embedded site can't bust out
 * of the frame; pointer-events disabled so clicks fall through to the card link.
 */
export function LivePreview({ src, title }: LivePreviewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.6);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / BASE_W);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden border-b border-border bg-surface-2"
      style={{ aspectRatio: "16 / 10" }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        tabIndex={-1}
        aria-hidden
        sandbox="allow-scripts allow-same-origin"
        referrerPolicy="no-referrer"
        className="absolute left-0 top-0 origin-top-left border-0"
        style={{
          width: BASE_W,
          height: BASE_H,
          transform: `scale(${scale})`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
