import { useState } from "react";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

function TodoList({ todos, setTodos }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  // Delete Todo
  function handleDelete(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  // Complete Todo
  function handleComplete(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updatedTodos);
  }

  // Edit Todo
  function handleEdit(todo) {
    setEditingId(todo.id);
    setEditText(todo.text);
  }

  // Save Todo
  function handleSave(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, text: editText }
        : todo
    );

    setTodos(updatedTodos);
    setEditingId(null);
  }

  if (todos.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="mt-6">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
          handleEdit={handleEdit}
          handleSave={handleSave}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
        />
      ))}
    </div>
  );
}

export default TodoList;