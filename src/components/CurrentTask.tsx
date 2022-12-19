import Task from "./Task";
import { useTodo } from "../context/TodoContext";

const CurrentTask = () => {
  const { todos, dropHandler, dragOverHandler } = useTodo();
  return (
    <div
      className="bg-orange-500 p-5 w-2/4 rounded text-black custom_containers"
    >
      <h1 className="mb-3 text-xl text-white font-medium">Current tasks</h1>
      <ul
        style={{height: '90%'}}
        onDrop={()=> dropHandler('incomplete')}
        onDragOver={(e) => dragOverHandler(e)}
        >
        {todos.length < 1 ? (
          <li>No Task added</li>
        ) : (
          todos.sort((a, b)=> (a.todo < b.todo ? -1 : a.todo > b.todo ? 1  : 0)).map(({ todo, id }) => <Task key={id} todo={todo} id={id} />)
        )}
      </ul>
    </div>
  );
};

export default CurrentTask;
