import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { IoMdCheckmark } from "react-icons/io";
import { RiSendPlaneLine } from "react-icons/ri";
import { useTodo } from "../context/TodoContext";

type TaskType = {
  todo: string;
  id: number;
  disableComplete?: boolean;
};

export default function Task({ todo, id, disableComplete }: TaskType) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [input, setInput] = useState<string>(todo);
  const { updateTodo, deleteTodo, completeTodo, dragStartHandler } = useTodo();

  return (
    <li
      draggable={true}
      onDrag={() => dragStartHandler(id, todo)}
      className="h-12 flex items-center justify-between w-full bg-white p-3 rounded mb-3 cursor-grab"
      style={{ boxShadow: "0px 3px 8px #424242" }}
    >
      {isEdit ? (
        <input
          className="outline-none p-1 w-2/4 rounded"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          style={{ border: "1px solid #ccc" }}
          type="text"
          placeholder="Edit task"
        />
      ) : (
        <span>{todo}</span>
      )}
      <div className="flex gap-3">
        <button className="p-1" onClick={() => setIsEdit((prev) => !prev)}>
          {isEdit ? (
            <RiSendPlaneLine onClick={() => updateTodo(id, input)} />
          ) : (
            <BiPencil />
          )}
        </button>
        <button className="p-1" onClick={() => deleteTodo(id)}>
          <AiOutlineDelete />
        </button>
        {!disableComplete && (
          <button className="p-1" onClick={() => completeTodo(id, todo)}>
            <IoMdCheckmark />
          </button>
        )}
      </div>
    </li>
  );
}
