import { useState } from "react";
import { Plus } from "lucide-react";

function TodoInput({ todos, setTodos }) {
  const [input, setInput] = useState("");

  function handleAddTodo() {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  }

  return (
    <div id="add-todo">
      <label
        htmlFor="new-todo"
        className="mb-2.5 block text-sm font-medium text-ink-mute dark:text-ink-faint"
      >
        Add a task
      </label>

      <div className="flex gap-2.5">
        <input
          id="new-todo"
          type="text"
          placeholder="e.g. Call mom, buy milk…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="field flex-1"
          aria-label="New todo"
        />

        <button
          type="button"
          onClick={handleAddTodo}
          className="btn-primary shrink-0 px-4 sm:px-5"
        >
          <Plus size={18} strokeWidth={2.25} />
          <span className="hidden sm:inline">Add</span>
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
