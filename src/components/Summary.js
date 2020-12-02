import React from "react";

function Summary(props) {
  console.log("props", props);
  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{props.tasks}</p>
    </div>
  );
}

export default Summary;
