"use client";

import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const alreadyCounted = sessionStorage.getItem("mp_counted") === "1";

    fetch("/api/visitors", { method: alreadyCounted ? "GET" : "POST" })
      .then((res) => (res.ok ? res.json() : null))
      .then((json: { count?: number } | null) => {
        if (!cancelled && json && typeof json.count === "number") {
          setCount(json.count);
          sessionStorage.setItem("mp_counted", "1");
        }
      })
      .catch(() => {
        /* counter is non-critical; fail silently */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <p className="text-center text-[13px] text-fg-subtle">
      You&apos;re visitor{" "}
      <span className="font-mono text-fg">#{count.toLocaleString()}</span>
    </p>
  );
}
