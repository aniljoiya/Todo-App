import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addNewTask = () => {
  if (newTodo.trim()) {
    setTodos((prevTodos) => [
      { task: newTodo, id: uuidv4(), isDone: false },
      ...prevTodos,
    ]);
    setNewTodo('');
  }
};

  const updateTodoValue = (e) => {
    setNewTodo(e.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const markAllAsDone = () => {
    setTodos((prevTodos) => prevTodos.map((todo) => ({ ...todo, isDone: true })));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Todo List</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a task"
            value={newTodo}
            onChange={updateTodoValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addNewTask();
              }
            }}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addNewTask}
            className="px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        {/* Scrollable Task List */}
        <ul className="space-y-3 max-h-64 overflow-y-auto pr-2">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm"
            >
              <span
                className={`flex-1 ${todo.isDone ? 'line-through text-gray-500' : 'text-gray-800'}`}
              >
                {todo.task}
              </span>
              <button
                onClick={() => toggleDone(todo.id)}
                className={`px-3 py-1 text-sm rounded-md font-medium transition ${
                  todo.isDone ? 'bg-yellow-400 text-white hover:bg-yellow-500' : 'bg-green-500 text-white hover:bg-green-600'
                }`}
              >
                {todo.isDone ? 'Undo' : 'Done'}
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-2 px-3 py-1 text-sm bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {/* Only show this button if there are tasks */}
        {todos.length > 0 && (
          <button
            onClick={markAllAsDone}
            className="mt-6 w-full py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition"
          >
            Mark All as Done
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoList;
