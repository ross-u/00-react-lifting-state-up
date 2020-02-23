import React from "react";

class Task extends React.Component {
  render() {
    const {
      name,
      id,
      description,
      isDone,
      deleteTask,
      updateTaskStatus
    } = this.props;

    return (
      <div className="task-card">
        <div className="task-card-half">
          <h1>{name}</h1>

          {isDone 
            ? <h3 style={{ color: "green" }}>DONE ✅</h3>
            : <h3 style={{ color: "red" }}>PENDING</h3>
          }
        </div>

        <div className="task-card-half">
          <h2> <u> Task Description </u> </h2>
          <p>{description}</p>

          <button className="delete" onClick={() => deleteTask(id)}>
            DELETE
          </button>

          <button className="add" onClick={() => updateTaskStatus(id)}>
            {isDone 
              ? <span>UNDO ❌</span> 
              : <span>✅</span>
            }
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
