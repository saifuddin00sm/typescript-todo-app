import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const SearchBar = () => {
const [inputValue, setInputValue] = useState<string>('');

const {addTodo} = useTodo();

const addTask = (e: any)=> {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue('');
}

  return (
    <form className="flex gap-2 items-center" onSubmit={addTask}>
      <input
        type="text"
        className="w-full p-3 rounded outline-none"
        placeholder="Write your task here..."
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-full outline-none w-12 h-12 bg-indigo-700 text-white hover:bg-indigo-500 transition-all"
      >
        ADD
      </button>
    </form>
  );
};

export default SearchBar;
