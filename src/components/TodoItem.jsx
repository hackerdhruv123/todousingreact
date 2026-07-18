function TodoItem({
  todo,
  handleDelete,
  handleComplete,
  handleEdit,
  handleSave,
  editingId,
  editText,
  setEditText,
}) {
  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-4
        rounded-2xl
        px-5
        py-4
        mb-4
        border
        border-gray-300
        dark:border-slate-700
        bg-zinc-300
        dark:bg-slate-800
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:bg-zinc-200
        dark:hover:bg-slate-700
      "
    >
      {/* Left Side */}
      <div className="flex items-center gap-4 flex-1 w-full">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleComplete(todo.id)}
          className="w-6 h-6 accent-cyan-500 cursor-pointer"
        />

        {editingId === todo.id ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="
              flex-1
              px-3
              py-2
              rounded-lg
              bg-white
              dark:bg-slate-700
              text-slate-900
              dark:text-white
              outline-none
              border
              border-gray-300
              dark:border-slate-600
            "
          />
        ) : (
          <span
            className={`text-lg transition-all duration-300 ${
              todo.completed
                ? "line-through text-slate-500 dark:text-slate-400"
                : "text-slate-900 dark:text-white"
            }`}
          >
            {todo.text}
          </span>
        )}

      </div>

      {/* Right Side */}
      <div className="flex gap-3 w-full md:w-auto">

        {editingId === todo.id ? (
          <button
            onClick={() => handleSave(todo.id)}
            className="
              flex-1
              md:flex-none
              px-5
              py-2
              rounded-xl
              bg-emerald-500
              hover:bg-emerald-600
              text-white
              font-medium
              transition-all
              duration-300
            "
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => handleEdit(todo)}
            className="
              flex-1
              md:flex-none
              px-5
              py-2
              rounded-xl
              bg-blue-500
              hover:bg-blue-600
              text-white
              font-medium
              transition-all
              duration-300
            "
          >
            Edit
          </button>
        )}

        <button
          onClick={() => handleDelete(todo.id)}
          className="
            flex-1
            md:flex-none
            px-5
            py-2
            rounded-xl
            bg-red-500
            hover:bg-red-600
            text-white
            font-medium
            transition-all
            duration-300
          "
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TodoItem;