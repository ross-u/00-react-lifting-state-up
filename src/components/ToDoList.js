import React, { Component } from 'react';
import Task from "./Task";
import Summary from './Summary';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {id: 'asd123', name: "Task1", isDone: false, description: 'Do something important'},
        {id: 'lio567', name: "Task2", isDone: false, description: 'Do something important'},
        {id: 'rty445', name: "Task3", isDone: false, description: 'Do something important'},
        {id: 'sdx123', name: "Task4", isDone: false, description: 'Do something important'},
        {id: 'aop113', name: "Task5", isDone: false, description: 'Do something important'}
      ]
    };

    /* 
     We bind the method because it will be called by another component (object)
     and it would have wrong `this` (context), as `this` points to whatever is calling the function.
     To make sure that our functions are always connected to ToDo, because they are changing it's state,
     we need to bind `this` to point to the ToDo component
     */

    this.toggleTaskDone = this.toggleTaskDone.bind(this);
    this.deleteToDoList = this.deleteToDoList.bind(this);
  };
  
  toggleTaskDone(id) {
    const taskListCopy = [...this.state.tasks];
    taskListCopy.forEach((taskObj) => {
      if(taskObj.id === id) {
        taskObj.isDone = !taskObj.isDone;
      }
    })
    this.setState( {tasks: taskListCopy} );
  }

  deleteToDoList (id)  {
  /***  
    State shouldn't be modified directly. 
    Splice modifies the orginal array it's called on. 
    Therefore we're using the spread operator to copy the array first. ;)
  ***/
    const taskListCopy = [...this.state.tasks];
    taskListCopy.forEach((taskObj, index) => {
      if(taskObj.id === id) {
        taskListCopy.splice(index, 1);
      }
    })
    this.setState( {tasks: taskListCopy} );
  };

  render() {
    return (
      <div>
        <Summary tasks={this.state.tasks}/>
        <div className='todo-container'>
          {
            this.state.tasks.map( (task) => {
              return <Task 
                      id={task.id}
                      deleteTask={ this.deleteToDoList }
                      updateTaskStatus={ this.toggleTaskDone }
                      key={task.id} 
                      {...task}
                    />
            })
          }
        </div>
      </div>
    )
  };
}

export default ToDoList;
