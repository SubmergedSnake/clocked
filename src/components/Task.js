import { useState } from 'react'
import '../css/Task.css'

function Task (props) {
  const [task, setTask] = useState(props.task)
  const { taskid, project, projectdesc, time } = task

  let interimValue
  let timerIsRunning

  const handleChange = e => {
    e.preventDefault()
    interimValue = e.target.value
    if (!timerIsRunning) {
      setTimeout(() => {
        setTask({ projectdesc: interimValue })
      }, 3000)
    }
  }

  return (
    <form>
      <label for='project'>Project</label>
      <input
        id='project'
        type='text'
        name='name'
        value={project}
        onChange={e => handleChange(e)}
      />

      <label for='projectdesc'>Description </label>
      <input id='projectdesc' type='text' name='name' value={projectdesc} />

      <label for='time'>Time</label>
      <input id='time' type='text' name='name' value={time} />
    </form>
  )
}

export default Task
