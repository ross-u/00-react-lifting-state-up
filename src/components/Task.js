import React from 'react';

function task(props) {
  return (
    <div className='task-card'>
      <h1>{props.taskName}</h1>
      <p>Task Description</p>
      <button className='delete' onClick={ ()=> props.deleteTask(props.id) }>DELETE</button>
      <button className='add' onClick={ ()=> props.updateTask(props.id, '	 🏓') }>ADD 🏓</button>
    </div>
  )
}

export default task;
