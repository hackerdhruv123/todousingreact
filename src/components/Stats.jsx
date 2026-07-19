function Stats({ todos, theme }) {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);
  const isDark = theme === "dark";

  if (total === 0) return null;

  return (
    <div>
      <div className="mb-2.5 flex items-center justify-between">
        <span
          className={`text-sm font-medium ${
            isDark ? "text-ink-faint" : "text-ink-mute"
          }`}
        >
          Progress
        </span>
        <span
          className={`text-sm font-semibold tabular-nums ${
            isDark ? "text-paper-soft" : "text-ink"
          }`}
        >
          {progress}%
        </span>
      </div>

      <div
        className={`h-2 w-full overflow-hidden rounded-full ${
          isDark ? "bg-white/10" : "bg-paper-deep"
        }`}
      >
        <div
          className="h-full rounded-full bg-clay transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p
        className={`mt-2.5 text-xs ${
          isDark ? "text-ink-faint/80" : "text-ink-faint"
        }`}
      >
        {completed === total
          ? "Nice work — everything's done."
          : `${completed} done · ${total - completed} still open`}
      </p>
    </div>
  );
}

export default Stats;
