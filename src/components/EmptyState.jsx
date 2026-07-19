function EmptyState({ theme, hasTodos = false }) {
  const isDark = theme === "dark";

  return (
    <div className="flex flex-col items-center px-4 py-12 text-center">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${
          isDark ? "bg-white/5" : "bg-clay-wash"
        }`}
        aria-hidden="true"
      >
        {hasTodos ? "🔍" : "✏️"}
      </div>

      <h2
        className={`font-display text-lg font-medium ${
          isDark ? "text-paper-soft" : "text-ink"
        }`}
      >
        {hasTodos ? "Nothing matches that" : "Your list is empty"}
      </h2>

      <p
        className={`mt-1.5 max-w-[240px] text-sm leading-relaxed ${
          isDark ? "text-ink-faint" : "text-ink-mute"
        }`}
      >
        {hasTodos
          ? "Try a different search, or clear the filter."
          : "Write something above — even a small task counts."}
      </p>
    </div>
  );
}

export default EmptyState;
