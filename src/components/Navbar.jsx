function Navbar({ theme, setTheme }) {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl md:text-3xl font-bold text-white">
          To-Do List
        </h1>

        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="
            px-3
            md:px-5
            py-2
            text-sm
            md:text-base
            rounded-lg
            bg-gradient-to-r
            from-violet-600
            to-purple-600
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-lg
          "
        >
          {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;