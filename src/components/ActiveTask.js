import { useState, useEffect } from 'react';
import '../css/Task.css';
import { Time } from './Time';
const prettyMilliseconds = require('pretty-ms');



export const ActiveTask = props => {

  const [task, setTask] = useState(props.task)
  const [taskClock, setRunning] = useState({ isRunning: false });


  {/*Animate upon activating task*/ }
  useEffect(() => {
    const foo = document.querySelector("#" + CSS.escape(task.id));
    foo.classList.add('activating');
    setTimeout(() => {
      foo.classList.add('active');
    }, 250);

  });

  const handleChange = e => {
    e.preventDefault();
    setTask({ ...task, [e.target.className]: e.target.value });
  }

  return (

    <form
      style={{ background: taskClock.isRunning ? 'lightgreen' : '' }}
      id={task.id} className="activeTask" 
    >

      <Time time={task.time} isRunning={taskClock.isRunning}/>

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


    </form>
  )
}
