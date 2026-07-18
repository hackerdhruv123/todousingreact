import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

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
          ? "bg-gradient-to-r from-[#4E5F50] via-[#2E8B57] to-[#19BFB8]"
          : "bg-gradient-to-br from-[#F8FAFC] via-[#ECFDF5] to-[#D1FAE5]"
      }`}
    >
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="flex justify-center mt-8 px-4">
        <div
          className={`w-full
          max-w-sm
          sm:max-w-md
          md:max-w-lg
          lg:max-w-xl
          rounded-3xl
          border
          backdrop-blur-xl
          transition-all
          duration-500
          p-4
          sm:p-5
          md:p-6
          ${
            theme === "dark"
              ? "bg-white/10 border-white/20 shadow-2xl shadow-black/30"
              : "bg-[#F8FAFC]/90 border-[#D1D5DB] shadow-2xl shadow-gray-300/40"
          }`}
        >
          <TodoInput
  todos={todos}
  setTodos={setTodos}
  theme={theme}
/>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <TodoList
            todos={filteredTodos}
            setTodos={setTodos}
          />

          <Stats todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;