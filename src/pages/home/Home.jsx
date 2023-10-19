import React, { useState } from "react";
import "./Home.css";
import Task from "../task/Task";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskData, setTaskData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskData([...taskData, task]);
    setTask("");
  };

  return (
    <div className="home-wrapper">
      <form className="home-form" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Your task..."
        />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      {taskData.length > 0 ? <Task taskData={taskData} /> : "Empty List"}
    </div>
  );
};

export default Home;
