function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16">

      <h2 className="text-center text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
 Task is Empty:
</h2>

      <p className="text-gray-400 mt-3">
        Add your first task .
      </p>

    </div>
  );
}

export default EmptyState;