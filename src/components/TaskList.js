import React from 'react'
import { Task } from './Task'
import { ActiveTask } from './ActiveTask'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../css/TaskList.css';

export const TaskList = props => {


  const [tasks, setTasks] = useState([
    { id: uuidv4(), project: 'React', taskdesc: 'R of MERN', seconds: 0, active: false },
    { id: uuidv4(), project: 'Node/Express', taskdesc: 'E and N of MERN', seconds: 0, active: false },
    { id: uuidv4(), project: 'Mongo', taskdesc: 'M of MERN', seconds: 0, active: false }
  ])

  const addTask = () => {
    const newTasks = [...tasks];
    deactivatePreviousTask(newTasks);
    setTasks([...newTasks, { id: uuidv4(), project: '', taskdesc: '', seconds: 0, active: true }]);
  }

  const deactivatePreviousTask = (tasks) => {
    {/*Deactivate old task if necessary*/ }
    let index = tasks.findIndex(task => task.active);
    console.log(`index is ${index}`)
    if (index > -1) {
      tasks[index].active = false;
    }
  }

  const activateTargetTask = (tasks, targetID) => {
    {/*Activate new task*/ }
    let index = tasks.findIndex(task => task.id === targetID);
    tasks[index].active = true;
  }


  const handleChange = (e, seconds) => {
    console.log(`Got time ${seconds}`);
    const formID = e.target.closest('form').id;
    console.log(`Handling change for task ${formID} in TaskList Component`);
    const newTasks = [...tasks];
    let index = newTasks.findIndex(task => task.id == formID);
    if (seconds) {
      newTasks[index]["seconds"] = seconds;
    } else {
      newTasks[index][e.target.className] = e.target.value;
    }
    setTasks(newTasks);
  }

  const handleClick = (e) => {

    const targetID = e.target.tagName == 'FORM' ? e.target.id : (e.target.tagName == 'DIV' ? e.target.parentElement.id : '');
    if (targetID) {
      const newTasks = [...tasks];

      deactivatePreviousTask(newTasks);
      activateTargetTask(newTasks, targetID);

      setTasks(newTasks);
    }
  }

  const activeTask = tasks.find(task => task.active);

  return (
    <div className='flex-parent'>
      {/* Inactive tasks */}
      <div className='flex-child-1'>
        {tasks.length > 0 && tasks.map(task => {
          return !task.active && <Task key={task.id} task={task} handleClick={handleClick} handleChange={handleChange} />
        })}
      </div>

      {/*Active task, show add button if there is none*/}
      <div className='flex-child-2'>
        <div style={{textAlign:"center"}} id='activeTaskContainer'>
        {activeTask != undefined ?
           <div><ActiveTask key={activeTask.id} task={activeTask} handleChange={handleChange} />
            <button id="newTask" onClick={addTask}>Add new Task...</button></div> :
          <button id="newTask" onClick={addTask}>Add new Task...</button>}
        </div>
      </div>


    </div>
  )

}

TaskList.propTypes = {
  tasks: PropTypes.array
}
