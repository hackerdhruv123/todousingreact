import { useState } from "react";

function TodoInput({ todos, setTodos }) {
  const [input, setInput] = useState("");

  function handleAddTodo() {
    if (input.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setInput("");
  }

  return (
    <div className="mb-8">
    <h2 className="text-center text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
  Chalo list banai:
</h2>

      <p className="text-slate-300 text-center mt-2">
        Stay organized and complete your goals.
      </p>

      <div className="flex gap-4 mt-8">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-5 py-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700"
        />

        <button
          onClick={handleAddTodo}
          className="px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;