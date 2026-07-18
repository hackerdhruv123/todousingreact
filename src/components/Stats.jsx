function Stats({ todos }) {
  return (
    <div className="mt-6 text-lime-600">
      Total Tasks : {todos.length}
    </div>
  );
}

export default Stats;