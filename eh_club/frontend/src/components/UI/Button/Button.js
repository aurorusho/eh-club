import React from "react";
import styles from "./Button.module.css";

const Button = ({ className, type, onClick, children}) => {
  const buttonClassName = className ? ` ${className}` : "";
  return (
    <button className={styles.button + buttonClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
