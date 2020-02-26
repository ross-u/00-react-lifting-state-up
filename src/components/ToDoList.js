import React, { Component } from "react";
import Task from "./Task";
import Summary from "./Summary";
import data from "./../data.js";

class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      tasks: data,
      tasksCompleted: 0
    };

    this.deleteTaskById = this.deleteTaskById.bind(this);
    this.toggleTaskDone = this.toggleTaskDone.bind(this);
    /*** 
      We bind the method because it will be invoked by another component (<Task> - object)
      Without binding, `this` will be refering to `<Task>` component that invoked the method.
      We `bind` `this` as we need it to point to <ToDoList> component (object) that holds the `state`.
    ***/
  }

  /***  
    1. State shouldn't be modified directly and `splice()` modifies the orginal array it's called on. 
    Therefore we're using the spread operator to copy the array first. ;)
    As an alternative we can also use the `.filter` method.
  ***/
  deleteTaskById(id) {
    const taskListCopy = [...this.state.tasks];
    let tasksCompleted = this.state.tasksCompleted;

    taskListCopy.forEach((taskObj, index) => {
      if (taskObj.id === id) {
        taskListCopy.splice(index, 1);

        // tasksCompleted--;
        if (taskObj.isDone) tasksCompleted--;
      }
    });
    this.setState({ tasks: taskListCopy, tasksCompleted });
  }

  toggleTaskDone(id) {
    const tasksCopy = [...this.state.tasks];
    let tasksCompleted = this.state.tasksCompleted;
    // let {tasksCompleted} = this.state;

    // Find the clicked task
    // Update the `isDone` property
    // Update the `tasksCompleted` counter
    // Set the updated state

    tasksCopy.forEach(taskObj => {
      if (taskObj.id === id) {
        taskObj.isDone = !taskObj.isDone;
        // taskObj.isDone = taskObj.isDone ? false : true;

        if (taskObj.isDone) tasksCompleted++;
        else if (!taskObj.isDone) tasksCompleted--;
      }
    });

    this.setState({ tasks: tasksCopy, tasksCompleted });
  }

  render() {
    return (
      <div>
        <Summary tasksCompleted={this.state.tasksCompleted}/>

        <div className="todo-container">
          {this.state.tasks.map(task => {
            return (
              <Task 
                key={task.id} 
                deleteTask={this.deleteTaskById}
                updateTaskDone={this.toggleTaskDone}
                {...task}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ToDoList;
