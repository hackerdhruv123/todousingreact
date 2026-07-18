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
    <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
  Chalo list banai:
</h2>

     <p className="mt-3 text-center text-sm md:text-lg text-slate-500 dark:text-slate-300">
        Stay organized and complete your goals.
      </p>

    <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="
flex-1
w-full
px-4
py-3
rounded-xl
bg-white
dark:bg-slate-800
text-slate-900
dark:text-white
border
border-gray-300
dark:border-slate-700
outline-none
focus:ring-2
focus:ring-violet-500
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
to-purple-600
text-white
font-semibold
transition-all
duration-300
hover:scale-105
hover:shadow-lg
"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;