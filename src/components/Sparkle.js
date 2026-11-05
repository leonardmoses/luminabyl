// Four-point sparkle, like the ones scattered around the logo.
export default function Sparkle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`fill-current ${className}`}
    >
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  );
}

// Thin gold rule with a sparkle in the middle, used as a section ornament.
export function Ornament({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-3 text-gold ${className}`}
    >
      <span className="h-px w-12 bg-gold/60" />
      <Sparkle className="h-3 w-3" />
      <span className="h-px w-12 bg-gold/60" />
    </div>
  );
}
