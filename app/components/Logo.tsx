/** Chariot Motors monogram — a six-spoke wheel motif, not a BMW roundel lookalike. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18.5" stroke="#1c69d4" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="3" fill="#1c69d4" />
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        // Fixed to 3 decimals: raw float-to-string can differ in the last
        // digit between server and client JS engines, which trips a
        // hydration mismatch and aborts hydration for this subtree.
        const x1 = (20 + Math.cos(angle) * 5.5).toFixed(3);
        const y1 = (20 + Math.sin(angle) * 5.5).toFixed(3);
        const x2 = (20 + Math.cos(angle) * 15.5).toFixed(3);
        const y2 = (20 + Math.sin(angle) * 15.5).toFixed(3);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#f4f4f5"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
