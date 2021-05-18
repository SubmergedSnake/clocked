import { useState } from 'react'
import '../css/Task.css'

export const Task = props => {
  const [task, setTask] = useState(props.task)

  const handleChange = e => {
    e.preventDefault();
    setTask({...task, [e.target.className]: e.target.value });
  }

  return (
    <form id={task.id} onDoubleClick={props.handleDoubleClick}>
      <label htmlFor='project'>Project</label>
      <input
        type='text'
        className='project'
        value={task.project}
        onChange={e => handleChange(e)}
      />

      <label htmlFor='taskdesc'>Description </label>
      <input
        type='text'
        className='taskdesc'
        value={task.taskdesc}
        onChange={e => handleChange(e)}
      />

      <label htmlFor='time'>Time</label>
      <input
        type='text'
        className='time'
        value={task.time}
        onChange={e => handleChange(e)}
      />
    </form>
  )
}
