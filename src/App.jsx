import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Stats from "./components/Stats";
import SearchBar from "./components/SearchBar";

function greeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [search, setSearch] = useState("");

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  const pending = todos.filter((t) => !t.completed).length;
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-night" : "bg-paper"
      }`}
    >
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="mx-auto max-w-app px-5 pb-16 pt-10 sm:px-6 sm:pt-14">
        {/* Quiet personal header — no marketing hero */}
        <header className="mb-8">
          <p
            className={`mb-1.5 text-sm font-medium ${
              isDark ? "text-ink-faint" : "text-ink-mute"
            }`}
          >
            {greeting()}
          </p>
          <h1
            className={`font-display text-[2rem] font-medium leading-tight tracking-tight sm:text-[2.35rem] ${
              isDark ? "text-paper-soft" : "text-ink"
            }`}
          >
            {pending === 0 && todos.length > 0
              ? "You're all caught up"
              : pending === 0
                ? "What's on your mind?"
                : pending === 1
                  ? "1 thing left today"
                  : `${pending} things left today`}
          </h1>
          {todos.length > 0 && (
            <p
              className={`mt-2 text-[15px] ${
                isDark ? "text-ink-faint" : "text-ink-mute"
              }`}
            >
              {todos.filter((t) => t.completed).length} of {todos.length} done
            </p>
          )}
        </header>

        {/* The actual tool */}
        <div
          className={`rounded-card border p-5 shadow-card sm:p-6 ${
            isDark
              ? "border-line-dark bg-card-dark"
              : "border-line bg-card"
          }`}
        >
          <TodoInput todos={todos} setTodos={setTodos} theme={theme} />

          {todos.length > 0 && (
            <>
              <div
                className={`my-5 h-px ${
                  isDark ? "bg-line-dark" : "bg-line"
                }`}
              />
              <SearchBar search={search} setSearch={setSearch} theme={theme} />
            </>
          )}

          <div className="mt-5">
            <TodoList
              todos={filteredTodos}
              setTodos={setTodos}
              allTodos={todos}
              theme={theme}
            />
          </div>

          {todos.length > 0 && (
            <>
              <div
                className={`my-5 h-px ${
                  isDark ? "bg-line-dark" : "bg-line"
                }`}
              />
              <Stats todos={todos} theme={theme} />
            </>
          )}
        </div>

        <p
          className={`mt-8 text-center text-sm ${
            isDark ? "text-ink-faint/70" : "text-ink-faint"
          }`}
        >
          Saved on this device only
        </p>
      </main>
    </div>
  );
}

export default App;
