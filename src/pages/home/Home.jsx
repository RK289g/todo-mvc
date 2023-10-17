import React, { useState } from "react";
import "./Home.css";
import Task from "../task/Task";

const Home = () => {
  const [taskName, setTaskName] = useState();
  return (
    <div className="home-wrapper">
      <form className="home-form">
        <input
          className="input-text"
          type="text"
          value={taskName}
          onChange={(ev) => setTaskName(ev.target.value)}
          placeholder="Your next task..."
        />
        <button className="btn">Add</button>
      </form>
      <Task />
    </div>
  );
};

export default Home;
