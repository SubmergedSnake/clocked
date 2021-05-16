import React from 'react'
import { Task } from './Task'
import PropTypes from 'prop-types'
const prettyMilliseconds = require('pretty-ms');


export const TaskList = props => {

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

  const tasks = props.tasks;

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
          {tasks.map(task => {
            return task.active && <Task key={task.id} task={task} />
          })}
        </div>


      </div>
  )

}

TaskList.propTypes = {
  tasks: PropTypes.array
}
