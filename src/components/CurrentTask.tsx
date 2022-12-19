import Task from "./Task";
import { useTodo } from "../context/TodoContext";

const CurrentTask = () => {
  const { todos } = useTodo();
  return (
    <div
      className="bg-orange-500 p-5 w-2/4 rounded text-black custom_containers"
    >
      <h1 className="mb-3 text-xl text-white font-medium">Current tasks</h1>
      <ul>
        {todos.length < 1 ? (
          <li>No Task added</li>
        ) : (
          todos.map(({ todo, id }) => <Task key={id} todo={todo} id={id} />)
        )}
      </ul>
    </div>
  );
};

export default CurrentTask;
