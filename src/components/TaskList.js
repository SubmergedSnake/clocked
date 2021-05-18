import React from 'react'
import { Task } from './Task'
import { ActiveTask } from './ActiveTask'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


export const TaskList = props => {


  const [tasks, setTasks] = useState([
    { id: uuidv4(), project: 'React', taskdesc: 'R of MERN', time: 0, startdt: '', lastmodified: '', active: false },
    { id: uuidv4(), project: 'Node/Express', taskdesc: 'E and N of MERN', time: 0, startdt: '', lastmodified: '', active: true },
    { id: uuidv4(), project: 'Mongo', taskdesc: 'M of MERN', time: 0, startdt: '', lastmodified: '', active: false }
  ])

  const activeTask = tasks.find(task => task.active);

  const handleDoubleClick = (e) => {
    console.log(`In TaskList Component, got click event from ${e.target.id}`);
    const newTasks = [...tasks];

    {/*Deactivate old task*/ }
    let index = newTasks.findIndex(task => task.active);
    newTasks[index].active = false;

    {/*Activate new task*/ }
    index = newTasks.findIndex(task => task.id === e.target.id);
    newTasks[index].active = true;

    console.log(`Found doubleclicked task at index ${index}`);

    setTasks(newTasks);
  }

  return (
    <div className='flex-parent'>

      {/* Inactive tasks */}
      <div className='flex-child-1'>
        {tasks.map(task => {
          return !task.active && <Task key={task.id} task={task} handleDoubleClick={handleDoubleClick} />
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
