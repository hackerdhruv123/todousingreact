import {
  Check,
  Pencil,
  Trash2,
  Save,
  X,
} from "lucide-react";

function TodoItem({
  todo,
  handleDelete,
  handleComplete,
  handleEdit,
  handleSave,
  handleCancelEdit,
  editingId,
  editText,
  setEditText,
  theme,
}) {
  const isEditing = editingId === todo.id;
  const isDark = theme === "dark";

  return (
    <li
      className={`group flex items-center gap-3 rounded-item px-3 py-2.5 transition-colors duration-150 ${
        todo.completed
          ? isDark
            ? "bg-white/[0.03]"
            : "bg-paper-soft"
          : isDark
            ? "hover:bg-white/[0.04]"
            : "hover:bg-clay-wash/60"
      }`}
    >
      {/* Checkbox */}
      <button
        type="button"
        onClick={() => handleComplete(todo.id)}
        className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-2 transition-all duration-150 ${
          todo.completed
            ? "border-clay bg-clay text-white"
            : isDark
              ? "border-ink-faint/50 hover:border-clay"
              : "border-ink-faint hover:border-clay"
        }`}
        aria-label={todo.completed ? "Mark as pending" : "Mark as complete"}
      >
        {todo.completed && <Check size={12} strokeWidth={3} />}
      </button>

      {/* Text / edit field */}
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave(todo.id);
            if (e.key === "Escape") handleCancelEdit();
          }}
          className="field h-9 flex-1 text-sm"
          autoFocus
          aria-label="Edit todo"
        />
      ) : (
        <button
          type="button"
          onClick={() => handleComplete(todo.id)}
          className={`min-w-0 flex-1 text-left text-[15px] leading-snug ${
            todo.completed
              ? isDark
                ? "text-ink-faint line-through"
                : "text-ink-mute line-through"
              : isDark
                ? "text-paper-soft"
                : "text-ink"
          }`}
        >
          {todo.text}
        </button>
      )}

      {/* Actions — show on hover / always on touch via group */}
      <div
        className={`flex shrink-0 items-center gap-0.5 transition-opacity duration-150 ${
          isEditing
            ? "opacity-100"
            : "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
        }`}
      >
        {isEditing ? (
          <>
            <button
              type="button"
              onClick={() => handleSave(todo.id)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-clay text-white transition-colors hover:bg-clay-deep"
              aria-label="Save todo"
            >
              <Save size={14} strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={handleCancelEdit}
              className="btn-ghost !h-8 !w-8"
              aria-label="Cancel edit"
            >
              <X size={14} strokeWidth={2} />
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => handleEdit(todo)}
              className="btn-ghost !h-8 !w-8"
              aria-label="Edit todo"
            >
              <Pencil size={14} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={() => handleDelete(todo.id)}
              className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                isDark
                  ? "text-ink-faint hover:bg-danger/15 hover:text-red-400"
                  : "text-ink-mute hover:bg-red-50 hover:text-danger"
              }`}
              aria-label="Delete todo"
            >
              <Trash2 size={14} strokeWidth={1.75} />
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;
