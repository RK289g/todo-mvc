import React, { useEffect, useState } from "react";
import "./Home.css";
import Task from "../task/Task";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskData, setTaskData] = useState([]);

  //get data from server
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    fetch("http://localhost:8000/tasks")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTaskData(data);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      id: Math.floor(Math.random() * 100),
      title: task,
      completed: false,
    };

    fetch("http://localhost:8000/tasks", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        fetchTasks();
        setTask("");
      });
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
      <Task taskData={taskData} fetchTasks={fetchTasks} />
    </div>
  );
};

export default Home;
