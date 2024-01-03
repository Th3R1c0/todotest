'use client';
import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  const [text, setText] = useState('')

  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, text }]);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col p-4 space-y-4">
      <h1>Todo List</h1>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex space-x-4 items-center">
            <div>{todo.text}</div>
            <button
              className="p-2 bg-gray-900 rounded-md"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className="flex space-x-4">
        <input
          type="text"
          className="text-black p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
        />
        <button className="p-2 bg-gray-900 rounded-md" onClick={addTodo}>
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
