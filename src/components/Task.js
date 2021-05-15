import { useState } from 'react'
import '../css/Task.css'

export const Task = props => {
  const [task, setTask] = useState(props.task)
  const { taskid, project, projectdesc, time } = task

  const handleChange = e => {
    e.preventDefault()
    setTask({ [e.target.id]: e.target.value })
  }

  return (
    <form>
      <label htmlFor='project'>Project</label>
      <input
        id='project'
        type='text'
        name='name'
        value={project}
        onChange={e => handleChange(e)}
      />

      <label htmlFor='projectdesc'>Description </label>
      <input
        id='projectdesc'
        type='text'
        name='name'
        value={projectdesc}
        onChange={e => handleChange(e)}
      />

      <label htmlFor='time'>Time</label>
      <input
        id='time'
        type='text'
        name='name'
        value={time}
        onChange={e => handleChange(e)}
      />
    </form>
  )
}
