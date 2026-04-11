import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  function addTask() {
    if (task.trim() === "") return;
    setList([...list, task]);
    setTask("");
  }

  function deleteTask(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo App </h1>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item} <div className="text-emerald-400">  <button onClick={() => deleteTask(index)}>delete</button></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


