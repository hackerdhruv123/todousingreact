function Stats({ todos }) {
  return (
    <div className="mt-6 text-white">
      Total Tasks : {todos.length}
    </div>
  );
}

export default Stats;