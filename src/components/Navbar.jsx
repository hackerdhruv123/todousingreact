import { Moon, Sun } from "lucide-react";

function Navbar({ theme, setTheme }) {
  const isDark = theme === "dark";

  return (
    <nav
      className={`sticky top-0 z-20 border-b backdrop-blur-md transition-colors duration-300 ${
        isDark
          ? "border-line-dark bg-night/80"
          : "border-line/80 bg-paper/80"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-app items-center justify-between px-5 sm:px-6">
        <a
          href="/"
          className={`flex items-center gap-2.5 ${
            isDark ? "text-paper-soft" : "text-ink"
          }`}
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-clay text-[13px] font-bold text-white"
            aria-hidden="true"
          >
            ✓
          </span>
          <span className="text-[15px] font-semibold tracking-tight">
            Today
          </span>
        </a>

        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="btn-ghost"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <Sun size={18} strokeWidth={1.75} />
          ) : (
            <Moon size={18} strokeWidth={1.75} />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
