import { useState } from "react";

function TodoInput({ todos, setTodos }) {
  const [input, setInput] = useState("");

  function handleAddTodo() {
    if (input.trim() === "") return;

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
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
  <span className="text-slate-900 dark:text-white">To-</span>
  <span className="text-cyan-500">Do</span>
  <span className="text-slate-900 dark:text-white"> List</span>
</h2>
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <input
          type="text"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="
            flex-1
            w-full
            px-4
            py-3
            rounded-xl
            bg-zinc-200
            dark:bg-slate-800
            text-slate-900
            dark:text-white
            placeholder:text-lime-600
            dark:placeholder:text-lime-400
            border
            border-gray-300
            dark:border-slate-700
            outline-none
            focus:ring-2
            focus:ring-teal-500
            transition-all
            duration-300
          "
        />

        <button
          onClick={handleAddTodo}
          className="
            w-full
            sm:w-auto
            px-6
            py-3
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-teal-600
            text-white
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-xl
            hover:shadow-emerald-500/40
            active:scale-95
          "
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;