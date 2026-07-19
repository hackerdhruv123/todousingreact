import { Search, X } from "lucide-react";

function SearchBar({ search, setSearch, theme }) {
  const isDark = theme === "dark";

  return (
    <div className="relative">
      <Search
        size={16}
        strokeWidth={1.75}
        className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 ${
          isDark ? "text-ink-faint" : "text-ink-mute"
        }`}
      />
      <input
        id="todo-search"
        type="search"
        placeholder="Search your list…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="field h-10 pl-10 pr-10 text-sm"
        aria-label="Search todos"
      />
      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          className={`absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full ${
            isDark
              ? "text-ink-faint hover:bg-white/10 hover:text-paper-soft"
              : "text-ink-mute hover:bg-paper-deep hover:text-ink"
          }`}
          aria-label="Clear search"
        >
          <X size={14} strokeWidth={2} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
