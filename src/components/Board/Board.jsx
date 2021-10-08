import React from "react";
import PropTypes from "prop-types";
import { Square } from "../Square";
import styles from "./Board.module.css";

export const Board = ({ squares, onClick }) => {
   const renderSquare = (i) => (
      <Square value={squares[i]} onClick={() => onClick(i)} />
   );

   return (
      <div>
         <div className={styles.status} />
         <div className={styles.board__row}>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
         </div>
         <div className={styles.board__row}>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
         </div>
         <div className={styles.board__row}>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
         </div>
      </div>
   );
};

Board.propTypes = {
   squares: PropTypes.arrayOf(PropTypes.string).isRequired,
   onClick: PropTypes.func.isRequired,
};
