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
    justify-between
    items-center
    bg-slate-800
    text-white
    p-4
    rounded-xl
    mb-3
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-2xl
    hover:bg-slate-700
    cursor-pointer
  "
>

      <div className="flex items-center gap-3">

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

      <div className="flex gap-2">

        {editingId === todo.id ? (
          <button
            onClick={() => handleSave(todo.id)}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => handleEdit(todo)}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => handleDelete(todo.id)}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TodoItem;