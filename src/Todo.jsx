import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Todo.css'; // import the CSS

function Todo() {
  const [todos, setTodos] = useState([
    { task: 'Coding', id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addNewTask = () => {
    if (newTodo.trim()) {
      setTodos((prev) => [
        ...prev,
        { task: newTodo, id: uuidv4(), isDone: false },
      ]);
      setNewTodo('');
    }
  };

  const deleteTask = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // const UpperCase = () => {
  //   setTodos((prev) =>
  //     prev.map((todo) => ({
  //       ...todo,
  //       task: todo.task.toUpperCase(),
  //     }))
  //   );
  // };

  const markAll = () => {
    setTodos((prev) => prev.map((todo) => ({ ...todo, isDone: true })));
  };

  // const updateUpperCase = (id) => {
  //   setTodos((prev) =>
  //     prev.map((todo) =>
  //       todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
  //     )
  //   );
  // };

  const markAsDone = (id) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, isDone: true } : todo))
    );
  };

  return (
    <div className="todo-container">
      <h1>Add Todo</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
      />
      <button onClick={addNewTask} className="todo-add-btn">
        Add
      </button>

      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t.id} className="todo-item">
            <span className={`todo-task ${t.isDone ? 'done' : ''}`}>
              {t.task}
            </span>
            <button
              className="todo-btn todo-delete-btn"
              onClick={() => deleteTask(t.id)}
            >
              Delete
            </button>
            <button
              className="todo-btn todo-done-btn"
              onClick={() => markAsDone(t.id)}
            >
              Mark Done
            </button>
          </li>
        ))}
      </ul>

      <hr />
      <br />
      <button onClick={markAll} className="mark-all-btn">
        Mark Done All
      </button>
    </div>
  );
}

export default Todo;
