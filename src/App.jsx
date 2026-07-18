import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";

function App() {
  // Load todos from Local Storage when app starts
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    }

    return [];
  });
const [search, setSearch] = useState("");
const [filter, setFilter] = useState("all");
const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "dark";
});
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
  localStorage.setItem("theme", theme);

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [theme]);

  const filteredTodos = todos.filter((todo) =>
  todo.text.toLowerCase().includes(search.toLowerCase())
);
  return (
   <div
  className={`min-h-screen transition-all duration-500 ${
   theme === "dark"
  ? "bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"
  : "bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100"
  }`}
>
     <Navbar
  theme={theme}
  setTheme={setTheme}
/>

      <div className="flex justify-center mt-6 md:mt-10 px-3 md:px-6">
  <div
  className={`w-full max-w-md md:max-w-2xl lg:max-w-3xl
  rounded-3xl
  backdrop-blur-xl
  border
  shadow-2xl
  p-5 md:p-8
  transition-all
  duration-500
  ${
    theme === "dark"
      ? "bg-slate-900/70 border-white/10"
      : "bg-white/70 border-white"
  }`}
>

          <TodoInput
  todos={todos}
  setTodos={setTodos}
/>

<SearchBar
  search={search}
  setSearch={setSearch}
/>

<TodoList
  todos={filteredTodos}
  setTodos={setTodos}
/>
          <Stats
            todos={todos}
          />

        </div>
      </div>
    </div>
  );
}

export default App;