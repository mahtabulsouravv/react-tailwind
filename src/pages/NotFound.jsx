import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });
  const [mode, setMode] = useState("two"); // "two" or "ai"
  const [winEffect, setWinEffect] = useState(false);
  const winner = calculateWinner(squares);
  const isDraw = squares.every(Boolean) && !winner;

  useEffect(() => {
    if (winner && !winEffect) {
      setTimeout(() => {
        setScore((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
        setWinEffect(true);
      }, 300);
    }
  }, [winner, winEffect]);

  const handleClick = (index) => {
    if (squares[index] || winner || winEffect) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);

    if (mode === "ai" && !winner && isXNext) {
      setTimeout(() => makeAIMove(newSquares), 500);
    }

    setIsXNext(!isXNext);
  };

  const makeAIMove = (currentSquares) => {
    const bestMove = findBestMove(currentSquares);
    if (bestMove !== -1) {
      currentSquares[bestMove] = "O";
      setSquares(currentSquares);
      setIsXNext(true);
    }
  };

  const findBestMove = (board) => {
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = "O";
        if (calculateWinner(board) === "O") {
          board[i] = null;
          return i;
        }
        board[i] = null;
      }
    }
    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        board[i] = "X";
        if (calculateWinner(board) === "X") {
          board[i] = null;
          return i;
        }
        board[i] = null;
      }
    }
    if (!board[4]) return 4;
    const corners = [0, 2, 6, 8].filter((i) => !board[i]);
    if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
    const empties = board.map((v, i) => (v === null ? i : null)).filter((v) => v !== null);
    if (empties.length) return empties[Math.floor(Math.random() * empties.length)];
    return -1;
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinEffect(false);
  };

  const playAgain = () => {
    resetGame();
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-background text-foreground relative overflow-hidden">
      <StarBackground />

      <div className="absolute top-4 right-4 animate-scale-bounce z-20">
        <ThemeToggle />
      </div>

      <h1 className="text-6xl font-bold mb-2 z-10">404</h1>
      <p className="text-xl text-muted-foreground mb-4 z-10">Oops! Page Not Found.</p>

      <div className="flex gap-4 mb-6 z-10">
        <button
          onClick={() => {
            resetGame();
            setMode("two");
          }}
          className={`px-4 py-2 rounded-full border transition-colors ${
            mode === "two"
              ? "bg-primary text-background"
              : "border-primary text-primary hover:bg-primary/20"
          }`}
        >
          2 Player
        </button>
        <button
          onClick={() => {
            resetGame();
            setMode("ai");
          }}
          className={`px-4 py-2 rounded-full border transition-colors ${
            mode === "ai"
              ? "bg-primary text-background"
              : "border-primary text-primary hover:bg-primary/20"
          }`}
        >
          Play with AI
        </button>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-md max-w-xs w-full z-10 relative overflow-hidden">
        {winEffect && (
          <div className="absolute inset-0 bg-primary/30 animate-ping-slow rounded-lg z-0" />
        )}
        <h2 className="text-xl font-semibold mb-4 text-primary z-10">Tic Tac Toe</h2>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {squares.map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="w-20 h-20 flex items-center justify-center text-3xl font-bold bg-background border border-border rounded-lg hover:bg-primary/10 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {value}
            </button>
          ))}
        </div>

        {winner ? (
          <p className="text-primary font-semibold mb-2 animate-bounce-fade">{winner} Wins!</p>
        ) : isDraw ? (
          <p className="text-primary font-semibold mb-2 animate-bounce-fade">It's a Draw!</p>
        ) : (
          <p className="text-muted-foreground mb-2">{isXNext ? "X" : "O"}'s Turn</p>
        )}

        <div className="flex justify-between mb-2 text-sm text-muted-foreground">
          <p>X: {score.X}</p>
          <p>O: {score.O}</p>
        </div>

        <div className="flex gap-4 mt-2">
          <button onClick={resetGame} className="cosmic-button flex-grow">
            Reset Game
          </button>
          {(winner || isDraw) && (
            <button onClick={playAgain} className="cosmic-button flex-grow bg-secondary hover:bg-secondary/80">
              Play Again
            </button>
          )}
        </div>
      </div>

      <a href="/" className="mt-6 text-primary hover:underline z-10">
        Back to Home
      </a>
    </section>
  );
};

function calculateWinner(squares) {
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
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
