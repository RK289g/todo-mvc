import {
  IconSquareRoundedCheck,
  IconTrash,
  IconSquareRoundedCheckFilled,
} from "@tabler/icons-react";
import "./Task.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const notifyDone = () => toast("Done & dusted!!!");
const notifyUnDone = () => toast("Let's give it another shot!");
const notifyDelete = () => toast("Task Deleted succesfully!!!");

const Task = ({ taskData, fetchTasks }) => {
  const handleDone = (task) => {
    if (task.completed) {
      notifyUnDone();
    } else {
      notifyDone();
    }

    const payload = {
      id: task.id,
      title: task.title,
      completed: !task.completed,
    };

    // fetch(`http://localhost:8000/tasks/${task.id}`, {
    //   method: "PATCH",
    //   body: JSON.stringify(payload),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     fetchTasks();
    //   });

    axios
      .patch(`http://localhost:8000/tasks/${task.id}`, payload, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((response) => {
        fetchTasks();
      })
      .catch((error) => {
        console.error("Error updating task: ", error);
      });
  };

  const handleDelete = (id) => {
    // fetch(`http://localhost:8000/tasks/${id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     fetchTasks();
    //   });
    // notifyDelete();

    axios.delete(`http://localhost:8000/tasks/${id}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        fetchTasks();
        notifyDelete();
      })
      .catch((error) => {
        console.error("Error deleting task: ", error);
      });
  };

  return (
    <div>
      {taskData.length <= 0
        ? "Empty List"
        : taskData?.map((task) => {
            return (
              <div className="task-wrapper" key={task?.id}>
                <div className="task-inner-wrapper">
                  <p
                    className={
                      task?.completed === true
                        ? "completed-task-name"
                        : "task-name"
                    }
                  >
                    {task?.title}
                  </p>
                  <div className="btn-div">
                    <button
                      className="btn-done"
                      onClick={() => handleDone(task)}
                    >
                      {task?.completed === true ? (
                        <IconSquareRoundedCheckFilled className="completed-icon" />
                      ) : (
                        <IconSquareRoundedCheck />
                      )}
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => handleDelete(task?.id)}
                    >
                      <IconTrash />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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

export default Task;
