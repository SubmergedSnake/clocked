import { useState } from 'react'
import '../css/Task.css'

export const Task = props => {
  const [task, setTask] = useState(props.task)
  const { id, project, projectdesc, time } = task

  const handleChange = e => {
    e.preventDefault();
    setTask({ [e.target.className]: e.target.value });
  }

  return (
    <form id={id}>
      <label htmlFor='project'>Project</label>
      <input
        type='text'
        className='project'
        value={project}
        onChange={e => handleChange(e)}
      />

      <label htmlFor='projectdesc'>Description </label>
      <input
        type='text'
        className='projectdesc'
        value={projectdesc}
        onChange={e => handleChange(e)}
      />

      <label htmlFor='time'>Time</label>
      <input
        type='text'
        className='time'
        value={time}
        onChange={e => handleChange(e)}
      />
    </form>
  )
}
