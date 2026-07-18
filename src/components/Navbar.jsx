function Navbar({ theme, setTheme }) {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          To-Do list
        </h1>

        <button
  onClick={() =>
    setTheme(theme === "dark" ? "light" : "dark")
  }
  className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-lg transition"
>
  {theme === "dark" ? " Dark" : "Light"}
</button>
      </div>
    </nav>
  );
}

export default Navbar;