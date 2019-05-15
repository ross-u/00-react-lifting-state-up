import React from 'react'

function summary(props) {
  
  let tasksCompleted = 0;
  props.tasks.forEach((task) => {
    if(task.isDone) tasksCompleted++;
  });

  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{tasksCompleted}</p>
    </div>
  )
}

export default summary;
