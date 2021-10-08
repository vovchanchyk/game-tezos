import React from "react";
import { useState } from "react/cjs/react.development";
import { calculateWinner } from "../../calculateWiner";
import { Board } from "../Board";
import styles from "./Game.module.css";

export const Game = () => {
   const [history, setHistory] = useState([{ squares: Array(9).fill("") }]);
   const [xIsNext, setXisNext] = useState(true);
   const [step, setStep] = useState(0);
   const currentData = history[step];
   const handleClick = (i) => {
      const historyCopy = history.slice(0, step + 1);
      const current = historyCopy[historyCopy.length - 1];
      const squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
         return;
      }
      squares[i] = xIsNext ? "X" : "O";
      setHistory(historyCopy.concat([{ squares }]));
      setStep(historyCopy.length);
      setXisNext((state) => !state);
   };
   const winner = calculateWinner(history[history.length - 1].squares);
   let status;
   if (winner) {
      status = `Выиграл ${winner}`;
   } else {
      status = `Следующий ход: ${xIsNext ? "X" : "O"}`;
   }

   const jumpTo = (stepArg) => {
      setStep(stepArg);
      setXisNext(() => step % 2 === 0);
   };

   const moves = history.map((st, move) => {
      const desc = move ? `Go to move #${move}` : "Go to game start";
      return (
         <li key={move}>
            <button type="button" onClick={() => jumpTo(move)}>
               {desc}
            </button>
         </li>
      );
   });

   return (
      <div>
         <div className={styles.game}>
            <div className={styles.game__board}>
               <Board
                  squares={currentData.squares}
                  onClick={(i) => handleClick(i)}
               />
            </div>
            <div className={styles.game__info}>
               <div>{status}</div>
               <ol>{moves}</ol>
            </div>
         </div>
      </div>
   );
};
