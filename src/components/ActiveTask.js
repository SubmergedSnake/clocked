import { useState, useEffect, useRef } from 'react';
import '../css/Task.css';
import { Time } from './Time';
const prettyMilliseconds = require('pretty-ms');



export const ActiveTask = props => {

  const runningTaskStyle = {
      background: "lime",
  }

  const [task, setTask] = useState(props.task)
  const [taskClock, setRunning] = useState({ isRunning: false });
  const timeref = useRef();

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

  const toggleClock = (e) => {
    console.log(`Current time is ${timeref.current.getTime()}`);
    if (e.target.tagName == 'FORM' || e.target.className == 'time') {
      setTask({...task, time: timeref.current.getTime()});
      setRunning({ isRunning: !taskClock.isRunning });
      timeref.current.toggle();
    }
  }

  return (

    <form
      style={taskClock.isRunning ? runningTaskStyle : {}}
      id={task.id} className="activeTask"
      onClick={toggleClock}
    >


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

      <Time time={task.time} isRunning={taskClock.isRunning} ref={timeref} />

    </form>
  )
}
