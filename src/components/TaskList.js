import React from 'react'
import { Task } from './Task'
import PropTypes from 'prop-types'
import '../css/TaskList.css';

export const TaskList = props => {
  const tasks = props.tasks;

  return (
    <div id='tasklist'>
     {tasks.map(task => {
       return <Task key={task.taskid} task={task} />
     })}
    </div>
  )

}

TaskList.propTypes = {
  tasks: PropTypes.array
}
