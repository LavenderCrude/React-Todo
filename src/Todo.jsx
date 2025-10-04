import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        isDone: false,
      }))
    );
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
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      <h1 style={{ color: '#4CAF50' }}>Add Todo</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          marginRight: '10px',
        }}
      />
      <button
        onClick={addNewTask}
        style={{
          padding: '8px 12px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Add
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((t) => (
          <li
            key={t.id}
            style={{
              margin: '10px 0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: '500',
                color: '#333',
              }}
            >
              {t.task}
            </span>
            <button
              style={{
                backgroundColor: '#ff4d4d',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '4px 8px',
                cursor: 'pointer',
              }}
              onClick={() => deleteTask(t.id)}
            >
              Delete
            </button>
            <button
              style={{
                backgroundColor: '#0a8408ff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '4px 8px',
                cursor: 'pointer',
              }}
              onClick={() => markAsDone(t.id)}
            >
              Mark Done
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <br />
      <button onClick={markAll}>Mark Done All</button>
    </div>
  );
}

export default Todo;
