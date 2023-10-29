import React, { useEffect, useState } from "react";
import "./Home.css";
import Task from "../task/Task";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Home = () => {
  const [task, setTask] = useState("");
  const [taskData, setTaskData] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //get data from server
  useEffect(() => {
    fetchTasks();
  }, []);

  const notify = () => toast("Task Added!!!!");

  // const fetchTasks = () => {
  //   setIsLoading(true);
  //   fetch("http://localhost:8000/tasks")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setTaskData(data);
  //       setIsLoading(false);
  //     });
  // };

  const fetchTasks = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/tasks")
      .then((response) => {
        setTaskData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tasks: ", error);
        setIsLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (task === "") {
      // alert("Please enter a Task Title");
      setErrorMsg(true);
      return;
    } else {
      setErrorMsg(false);
      notify();
    }

    const payload = {
      id: Math.floor(Math.random() * 100),
      title: task,
      completed: false,
    };

    // fetch("http://localhost:8000/tasks", {
    //   method: "POST",
    //   body: JSON.stringify(payload),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     fetchTasks();
    //     setTask("");
    //   });

    axios.post("http://localhost:8000/tasks", payload, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        fetchTasks();
        setTask("");
      })
      .catch((error) => {
        console.error("Error adding task: ", error);
      });
  };

  return (
    <div className="home-wrapper">
      <form className="home-form-wrapper" onSubmit={handleSubmit}>
        <div className="home-form">
          <input
            className="input-text"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Your task..."
          />
          <button type="submit" className="submit-btn">
            Add
          </button>
        </div>
        {errorMsg && <p>Error! Plz enter a task</p>}
      </form>
      {isLoading ? (
        "Loading...."
      ) : (
        <Task taskData={taskData} fetchTasks={fetchTasks} />
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Home;
