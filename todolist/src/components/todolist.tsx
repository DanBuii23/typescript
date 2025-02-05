import { useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export const TodoApp = () => {
  const [todo, setTodo] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [input, setInput] = useState<string>("");

  // Lưu danh sách vào localStorage khi todos thay đổi
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  // Thêm công việc mới
  const addTodo = useCallback(() => {
    if (!input.trim()) return;
    setTodo([...todo, { id: uuidv4(), text: input, completed: false }]);
    setInput("");
  }, [input, todo]);

  // Xóa công việc
  const removeTodo = useCallback(
    (id: string) => {
      setTodo(todo.filter((todo) => todo.id !== id));
    },
    [todo]
  );

  // Đánh dấu hoàn thành công việc
  const toggleComplete = useCallback(
    (id: string) => {
      setTodo(
        todo.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [todo]
  );

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Danh sách việc cần làm
      </h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập công việc..."
          className="flex-1 px-3 py-2 border rounded-l"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
        >
          Thêm
        </button>
      </div>

      <ul className="space-y-2">
        {todo.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border rounded"
          >
            <span
              className={`cursor-pointer ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
