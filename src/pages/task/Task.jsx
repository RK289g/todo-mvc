import {
  IconSquareRoundedCheck,
  IconTrash,
  IconSquareRoundedCheckFilled,
} from "@tabler/icons-react";
import "./Task.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyDone = () => toast("Done & dusted!!!");
const notifyDelete = () => toast("Task Deleted succesfully!!!");

const Task = ({ taskData, fetchTasks }) => {
  const handleDone = (task) => {
    notifyDone();
    console.log(task);

    const payload = {
      id: task.id,
      title: task.title,
      completed: !task.completed,
    };

    fetch(`http://localhost:8000/tasks/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        fetchTasks();
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        fetchTasks();
      });
      notifyDelete();
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
