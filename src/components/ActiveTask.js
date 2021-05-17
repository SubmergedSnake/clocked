import { useState } from 'react'
import '../css/Task.css'
import loadergif from '../img/preloader1.gif';


export const ActiveTask = props => {




  const [task, setTask] = useState(props.task)
  const [taskClock, setRunning] = useState({ isRunning: false });
  const { id, project, taskdesc, time } = task;

  const handleChange = e => {
    e.preventDefault();
    setTask({ [e.target.className]: e.target.value });
  }


  const handleToggle = (e) => {
    if (e.target.tagName == 'FORM') {
      setRunning({ isRunning: !taskClock.isRunning });
    }
  }


  return (

    <form
      style={{ background: taskClock.isRunning ? 'lightgreen' : '' }}
      id={id} className="activeTask" onClickCapture={handleToggle}>



      <label htmlFor='project'>Project</label>
      <input
        type='text'
        className='project'
        value={project}
        onChange={e => handleChange(e)}
      />


      <label htmlFor='taskdesc'>Description </label>
      <input
        type='text'
        className='taskdesc'
        value={taskdesc}
        onChange={e => handleChange(e)}
      />

      <label htmlFor='time'>Time</label>
      <input
        type='text'
        className='time'
        value={time}
        disabled
        style={{ background: taskClock.isRunning ? 'pink' : ''}}
      />
    </form>
  )
}
