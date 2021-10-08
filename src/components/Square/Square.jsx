import React from "react";
import PropTypes from "prop-types";
import styles from "./Square.module.css";

export const Square = ({ value, onClick }) => (
   <button type="button" className={styles.square} onClick={() => onClick()}>
      {value}
   </button>
);
Square.propTypes = {
   value: PropTypes.string.isRequired,
   onClick: PropTypes.func.isRequired,
};
export default Square;
