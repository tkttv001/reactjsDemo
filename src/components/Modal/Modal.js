import React from "react";
import classes from "./Modal.module.css";

function Modal({ close, name }) {
  return (
    <div className={classes.backDrop}>
      <div className={classes.modalContainer}>
        <div className="title">Modal 1</div>
        <div className="body">{name}</div>
        <div className="footer">
          <button>cancle</button>
          <button onClick={() => close(false)}>okay</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
