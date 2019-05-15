import React from 'react';

function task(props) {
  return (
    <div className='task-card'>
      <div className='task-card-half'>
        <h1>{props.name}</h1>
        {
          props.isDone ?
          <h3 style={{color: 'green'}}>DONE ✅</h3>
          :
          <h3 style={{color: 'red'}}>PENDING</h3>
        }
      </div>

      <div className='task-card-half'>
        <h2><u> Task Description </u></h2>      
        <p>{props.description}</p>
        <button className='delete' onClick={ ()=> props.deleteTask(props.id) }>DELETE</button>
        <button className='add' onClick={ ()=> props.updateTaskStatus(props.id) }>
        {
          props.isDone ?
          <span>UNDO ❌</span>
          :
          <span>✅</span>
        }
        </button>
      </div>
    </div>
  )
}

export default task;
