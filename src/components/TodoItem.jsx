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
    items-start
    md:items-center
    gap-4
    rounded-xl
    p-4
    mb-4
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
    bg-zinc-300
    dark:bg-slate-800
    hover:bg-zinc-400
    dark:hover:bg-slate-700
  "
>

      <div className="flex items-center gap-3 flex-1 w-full">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleComplete(todo.id)}
          className="w-5 h-5"
        />

        {editingId === todo.id ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="bg-slate-700 text-white px-3 py-2 rounded-lg outline-none"
          />
        ) : (
          <span
            className={
              todo.completed
                ? "line-through text-gray-400"
                : ""
            }
          >
            {todo.text}
          </span>
        )}

      </div>

   <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
        {editingId === todo.id ? (
          <button
            onClick={() => handleSave(todo.id)}
           className="w-full sm:w-auto bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition">
            Save
          </button>
        ) : (
          <button
            onClick={() => handleEdit(todo)}
            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => handleDelete(todo.id)}
        className="w-full sm:w-auto bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TodoItem;