import React, { Component } from 'react';
import Task from "./Task";
import Summary from './Summary';
import data from './../data.js'

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: data
    };
    
    this.toggleTaskDone = this.toggleTaskDone.bind(this);
    this.deleteToDoList = this.deleteToDoList.bind(this);   
    /*** 
      We bind the method because it will be called by a component (<Task> - object)
      and without binding, `this` will be pointing to `<Task>` component that invoked the method.
      We `bind` `this` as we need it to point to <ToDoList> component which has the `state`.
    ***/
  };
  
  toggleTaskDone(id) {
    console.log('What is `this`', this)
    const taskListCopy = [...this.state.tasks];
    taskListCopy.forEach((taskObj) => {
      if(taskObj.id === id) {
        taskObj.isDone = !taskObj.isDone;
      }
    })
    this.setState( {tasks: taskListCopy} );
  }

  /***  
    State shouldn't be modified directly. 
    Splice modifies the orginal array it's called on. 
    Therefore we're using the spread operator to copy the array first. ;)
  ***/
  deleteToDoList (id)  {
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
