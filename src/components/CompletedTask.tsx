import Task from "./Task";
import { useTodo } from "../context/TodoContext";

const CompletedTask = () => {
  const { completedTodo, dragOverHandler, dropHandler } = useTodo();
  return (
    <div className="bg-green-500 p-5 w-2/4 rounded text-black custom_containers">
      <h1 className="mb-3 text-xl text-white font-medium">Completed tasks</h1>
      <ul
        style={{height: '90%'}}
        onDrop={dropHandler}
        onDragOver={(e) => dragOverHandler(e)}
      >
        {completedTodo.length < 1 ? (
          <li>No task completed</li>
        ) : (
          completedTodo.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              todo={task.todo}
              disableComplete={true}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default CompletedTask;
