// todos is array of objects
export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {" "}
              {todo.complete == true ? "Completd" : "Mark as Complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
