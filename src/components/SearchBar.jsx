function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder=" Search Todo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-5 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 outline-none focus:border-violet-500"
      />
    </div>
  );
}

export default SearchBar;