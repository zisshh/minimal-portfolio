"use client";

import { useEffect, useState } from "react";

interface RoleRotatorProps {
  roles: readonly string[];
  intervalMs?: number;
}

/** Cycles roles with a per-character blur-in reveal — the reference's signature effect. */
export function RoleRotator({ roles, intervalMs = 2800 }: RoleRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (roles.length <= 1) return;
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [roles.length, intervalMs]);

  const role = roles[index] ?? "";

  return (
    <p
      className="mt-1 text-[15px] font-medium text-fg-muted"
      aria-live="polite"
    >
      <span key={index} className="inline-flex">
        {role.split("").map((char, i) => (
          <span
            key={i}
            style={{
              animation: "blurIn 0.5s both",
              animationDelay: `${i * 0.028}s`,
              whiteSpace: "pre",
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </p>
  );
}
