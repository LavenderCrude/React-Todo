import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Todo() {
  const [todo, setTodo] = useState([{ task: 'Coding', id: uuidv4() }]);
  const [newTodo, setNewTodo] = useState('');

  const addNewTask = () => {
    if (newTodo.trim() !== '') {
      // Prevent adding empty todos
      setTodo([...todo, { task: newTodo, id: uuidv4() }]); // Add new todo to array
      setNewTodo(''); // Clear input
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
      <br />
      <hr />
      <ul>
        {todo.map((a) => (
          <li key={a.id}>{a.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
