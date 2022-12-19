import { useState, useEffect } from "react";

export function useLocalStorage<T>(todo: T | (() => T), key: string) {
  const [todoList, setTodoList] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }

    if (typeof todo === "function") {
      return todo as () => T;
    } else {
      return todo;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todoList));
  }, [todo, key]);

  return [todoList, setTodoList] as [typeof todoList, typeof setTodoList];
}
