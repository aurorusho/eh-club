import React from "react";
import reactDom from "react-dom";

import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";

const Backdrop = ({ onConfirm }) => {
  return <div className={styles.backdrop} onClick={onConfirm}></div>;
};

const OverLay = ({ header, message, onConfirm, cancelText }) => {
  return (
    <Card className={styles.modal}>
      <h2 className={styles.header}>{header}</h2>
      <p className={styles.msg}>{message}</p>
      <Button onClick={onConfirm} className={styles.cancelButton}>
        {cancelText}
      </Button>
    </Card>
  );
};

const ErrorModal = (props) => {
  const cancelText = props.cancelText ? props.cancelText : "Cerrar";
  const overlayProps = {
    header : props.header,
    message : props.message,
    cancelText: cancelText
  };
  return (
    <>
      {reactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {reactDom.createPortal(
        <OverLay {...overlayProps} onConfirm={props.onConfirm}/>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;