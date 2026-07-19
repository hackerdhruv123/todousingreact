import { useState } from "react";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

function TodoList({ todos, setTodos, allTodos = todos, theme }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  function handleDelete(id) {
    setTodos(allTodos.filter((todo) => todo.id !== id));
  }

  function handleComplete(id) {
    setTodos(
      allTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleEdit(todo) {
    setEditingId(todo.id);
    setEditText(todo.text);
  }

  function handleSave(id) {
    if (!editText.trim()) return;

    setTodos(
      allTodos.map((todo) =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo
      )
    );
    setEditingId(null);
  }

  function handleCancelEdit() {
    setEditingId(null);
    setEditText("");
  }

  if (todos.length === 0) {
    return <EmptyState theme={theme} hasTodos={allTodos?.length > 0} />;
  }

  // Pending first, then completed — feels more natural
  const sorted = [...todos].sort((a, b) => {
    if (a.completed === b.completed) return 0;
    return a.completed ? 1 : -1;
  });

  return (
    <ul className="space-y-1.5" role="list">
      {sorted.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleCancelEdit={handleCancelEdit}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          theme={theme}
        />
      ))}
    </ul>
  );
}

export default TodoList;
