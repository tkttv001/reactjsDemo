import React from "react";
import "./Todo.scss";

function Todo(props) {
  function clickHandle() {
    props.selectedItemHandle(props.item);
  }

  return (
    <div className="card-custom col">
      <div className="title m-1">item {props.item.name}</div>
      <div className="action mt-3">
        <button className="w-100 p-1" onClick={clickHandle}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
