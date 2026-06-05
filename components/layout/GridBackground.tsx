/** Fixed blueprint texture (grid + dots) behind everything, fading toward the bottom. */
export function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id="grid-pattern"
            width="70"
            height="70"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M70 0H0V70"
              fill="none"
              stroke="var(--grid-line)"
              strokeWidth="1"
            />
          </pattern>
          <pattern
            id="dot-pattern"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1.5" fill="var(--dot)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        <rect width="100%" height="100%" fill="url(#dot-pattern)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
