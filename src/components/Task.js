import React from "react";

function Task({text, category, onDelete}) {

  

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div  className="text">{text}</div>
      <button onClick={onDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
