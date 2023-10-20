import "./Task.css";

const Task = ({ taskData }) => {
  return (
    <div>
      {taskData.length <= 0
        ? "Empty List"
        : taskData?.map((task) => {
            return (
              <div className="task-wrapper" key={task?.id}>
                <div className="task-inner-wrapper">
                  <p className="task-name">{task?.title}</p>
                  <div className="btn-div">
                    <button className="btn-done">Done</button>
                    <button className="btn-delete">delete</button>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Task;
