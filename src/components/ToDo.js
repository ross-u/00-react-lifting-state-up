import React, { Component } from 'react';
import Task from "./Task";

class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {id: 'asdfgh123', name: "Task1"}, {id: 'hjklio567', name: "Task2"}, {id: 'rtyoiu445', name: "Task3"}, {id: 'asdftt123', name: "Task4"}, {id: 'asssdgh123', name: "Task5"}
      ]
    };

    /* 
     We bind the method because it will be called by another component (object)
     and it would have wrong `this` (context), as `this` points to whatever is calling the function.
     To make sure that our functions are always connected to ToDo, because they are changing it's state,
     we need to bind `this` to point to the ToDo component
     */

    this.updateToDoList = this.updateToDoList.bind(this);
    this.deleteToDoList = this.deleteToDoList.bind(this);
  };
  
  updateToDoList (id, newNameValue)  {
    const taskListCopy = [...this.state.tasks];
    taskListCopy.forEach((taskObj) => {
      if(taskObj.id === id) {
        taskObj.name += newNameValue;
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
      <div className='todo-container'>
        {
          this.state.tasks.map( (task) => {
            return <Task 
                    id={task.id}
                    deleteTask={ this.deleteToDoList }
                    updateTask={ this.updateToDoList }
                    key={task.name + task.id.toString()} 
                    taskName={task.name} 
                  />
          })
        }
      </div>
    )
  };
}

export default ToDo;
