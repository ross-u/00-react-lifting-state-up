import React from 'react'

function summary(props) {

  return (
    <div>
      <h1>TASKS COMPLETED:</h1>
      <p className="tasks-completed">{props.tasksCompleted}</p>
    </div>
  )
}

export default summary;
