function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16">

       <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
  <span className="text-cyan-500 dark:text-white">Task-</span>
  <span className="text-slate-900  dark:text-cyan-500 ">is-</span>
  <span className="text-cyan-500 dark:text-white">Empty</span>
</h2>

      <p className="text-lime-400 mt-3">
        Add your first task .
      </p>

    </div>
  );
}

export default EmptyState;