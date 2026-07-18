function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder=" Live Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
w-10/12
px-5
py-3
rounded-xl
bg-zinc-300
dark:bg-slate-800
text-slate-900
dark:text-white
border
border-gray-300
dark:border-slate-700
outline-none
focus:ring-2
focus:ring-violet-500
placeholder:text-lime-600
dark:placeholder:text-lime-600
transition-all
duration-300
"/>
    </div>
  );
}

export default SearchBar;