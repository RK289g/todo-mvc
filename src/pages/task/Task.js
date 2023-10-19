import "./Task.css";

import React from "react";

const Task = ({ taskData }) => {
  console.log(taskData, "data");

  return taskData.map((item, index) => {
    return (
      <div className="task-wrapper" key={index}>
        <div className="task-inner-wrapper">
          <p className="task-name">{item}</p>
          <button className="btn-done">Done</button>
          <button className="btn-delete">delete</button>
        </div>
      </div>
    );
  });
};

export default Task;
