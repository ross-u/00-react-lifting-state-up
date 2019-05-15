import React, { Component } from 'react';
import Task from "./Task";
import Summary from './Summary';
import data from './../data.js'

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: data,
      tasksCompleted: 0
    };
    
    this.toggleTaskDone = this.toggleTaskDone.bind(this);
    this.deleteTaskById = this.deleteTaskById.bind(this);   
    /*** 
      We bind the method because it will be called by a component (<Task> - object)
      and without binding, `this` will be pointing to `<Task>` component that invoked the method.
      We `bind` `this` as we need it to point to <ToDoList> component which has the `state`.
    ***/
  };
  
  toggleTaskDone(id) {
    const tasksCopy = [...this.state.tasks];
    let tasksCompleted = this.state.tasksCompleted;

    tasksCopy.forEach((oneTask) => {
      if(oneTask.id === id) {
        oneTask.isDone = oneTask.isDone ? false : true;
        if (oneTask.isDone) tasksCompleted++;
        else if (!oneTask.isDone) tasksCompleted--;        
      }
    })
    this.setState( {tasks: tasksCopy, tasksCompleted } );
  }

  /***  
    State shouldn't be modified directly. 
    Splice modifies the orginal array it's called on. 
    Therefore we're using the spread operator to copy the array first. ;)
  ***/
  deleteTaskById (id)  {
    const taskListCopy = [...this.state.tasks];
    let tasksCompleted = this.state.tasksCompleted;

    taskListCopy.forEach((taskObj, index) => {
      if(taskObj.id === id) {
        taskListCopy.splice(index, 1);
        tasksCompleted--;
      }
    })
    this.setState( {tasks: taskListCopy, tasksCompleted} );
  };

  render() {
    return (
      <div>
        <Summary tasksCompleted={this.state.tasksCompleted}/>
        <div className='todo-container'>
        {
          this.state.tasks.map( (task) => {
            return <Task key={task.id} 
                    deleteTask={ this.deleteTaskById }
                    updateTaskStatus={ this.toggleTaskDone }
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
