import { useState } from "react";
import Square from "./square";

export default function App() {
  
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const result = calculateWinner(squares);
  const winner = result?.winner || null;
  const winningLine = result?.line || [];

  function handleClick(i) {
    if (squares[i] || winner) return;

    const newSquares = [...squares];
    newSquares[i] = isXTurn ? "X" : "O";
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Tic Tac Toe</h1>
      <h2>{winner ? `Winner: ${winner}` : `Turn: ${isXTurn ? "X" : "O"}`}</h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexWrap: "wrap", width: "270px" }}>
          {squares.map((value, index) => (
            <Square
              key={index}
              value={value}
              onClick={() => handleClick(index)}
              isHighlight={winningLine.includes(index)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={resetGame}
        style={{
          marginTop: "20px",
          padding: "10px 25px",
          fontSize: "1rem",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(sq) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
      return { winner: sq[a], line: [a, b, c] };
    }
  }
  return null;
}
