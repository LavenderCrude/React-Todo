import { useState } from 'react';

export default function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });
  const [arr, setArr] = useState(['...no move']);

  const updateMoves = (color) => {
    setMoves((prev) => ({ ...prev, [color]: prev[color] + 1 }));
    setArr((prev) => [...prev, `${color} Move`]);
    console.log([arr]);
  };

  return (
    <>
      <p>Game Begins</p>
      <div className="board">
        <p>Blue Moves = {moves.blue}</p>
        <button
          style={{ backgroundColor: 'blue', color: 'white' }}
          onClick={() => updateMoves('blue')}
        >
          +1
        </button>
        <p>Yellow Moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: 'yellow', color: 'black' }}
          onClick={() => updateMoves('yellow')}
        >
          +1
        </button>
        <p>Green Moves = {moves.green}</p>
        <button
          style={{ backgroundColor: 'green', color: 'white' }}
          onClick={() => updateMoves('green')}
        >
          +1
        </button>
        <p>Red Moves = {moves.red}</p>
        <button
          style={{ backgroundColor: 'red', color: 'white' }}
          onClick={() => updateMoves('red')}
        >
          +1
        </button>
        <div>
          <h3>Move History</h3>
          <ul>
            {arr.map((move, index) => (
              <li key={index}>{move}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
