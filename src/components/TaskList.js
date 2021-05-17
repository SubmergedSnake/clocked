import React from 'react'
import { Task } from './Task'
import { ActiveTask } from './ActiveTask'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const prettyMilliseconds = require('pretty-ms');


export const TaskList = props => {


  const [tasks, setTask] = useState([
    { id: uuidv4(), project: 'React', taskdesc: 'R of MERN', time: 0, startdt: '', lastmodified: '', active: false },
    { id: uuidv4(), project: 'Node/Express', taskdesc: 'E and N of MERN', time: 0, startdt: '', lastmodified: '', active: true },
    { id: uuidv4(), project: 'Mongo', taskdesc: 'M of MERN', time: 0, startdt: '', lastmodified: '', active: false }
  ])

  let interval;
  let taskIsRunning = false;
  let taskMilliSeconds = 0;

  const toggleRun = (milliseconds) => {
    if (!taskIsRunning) {
      taskMilliSeconds = milliseconds;
      setInterval((milliseconds) => { updateTime(milliseconds) }, 1000);
      return;
    }
    taskIsRunning = false;
    clearInterval(interval);
  }

  const updateTime = (milliseconds) => {
    taskMilliSeconds += milliseconds;
    console.log(prettyMilliseconds(taskMilliSeconds));
  }

  const activeTask = tasks.find(task => task.active);

  return (
    <div className='flex-parent'>

      {/* Inactive tasks */}
      <div className='flex-child-1'>
        {tasks.map(task => {
          return !task.active && <Task key={task.id} task={task} />
        })}


      </div>

      {/* Active task */}
      <div className='flex-child-2'>
        <ActiveTask key={activeTask.id} task={activeTask} />
      </div>


    </div>
  )

}

TaskList.propTypes = {
  tasks: PropTypes.array
}
