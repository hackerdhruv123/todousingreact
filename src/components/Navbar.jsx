function Navbar({ theme, setTheme }) {
  return (
    <nav className="w-full bg-black-900 border-b border-slate-700">
      <div className="max-w-full mx-auto px-4 md:px-6 py-5 flex justify-end items-center">

        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="
            px-3
            md:px-5
            py-3
            text-sm
            md:text-base
            rounded-lg
            bg-gradient-to-r
            from-violet-600
            to-teal-600
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-lg
            hover:text-red-800
  
          "
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;