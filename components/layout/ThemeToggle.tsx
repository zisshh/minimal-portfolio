"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage may be unavailable */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="group inline-flex h-9 w-9 items-center justify-center rounded-lg text-fg-subtle transition-colors hover:bg-surface hover:text-fg-strong"
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      {mounted && theme === "light" ? (
        <Sun className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
