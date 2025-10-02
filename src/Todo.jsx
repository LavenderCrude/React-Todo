import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Todo() {
  const [todos, setTodos] = useState([{ task: 'Coding', id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState('');

  const addNewTask = () => {
    if (newTodo.trim()) {
      setTodos((prev) => [...prev, { task: newTodo, id: uuidv4() }]);
      setNewTodo('');
    }
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <input
        type="text"
        placeholder="Enter Task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addNewTask}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
