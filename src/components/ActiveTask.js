import { useState, useEffect, useRef } from 'react';
import '../css/Task.css';
import { Clock } from './Clock';



export const ActiveTask = props => {

  const runningTaskStyle = {
    background: "lime",
  }

  const { _id = '', project = '', taskdesc = '', seconds = 0 } = props.task;
  const [taskClock, setRunning] = useState({ isRunning: false });
  const timeref = useRef();

  {/*Animate upon activating task*/ }
  useEffect(() => {
    document.title = `${project}`;
    const foo = document.querySelector("#" + CSS.escape(_id));
    foo.classList.add('activating');
    setTimeout(() => {
      foo.classList.add('active');
    }, 250);
    if (project === '') {
      document.querySelector('.activeTask input.project').focus();
    }
  });

  const toggleClock = (e) => {
    if (e.target.tagName == 'FORM' || e.target.className == 'time') {
      const currentTime = timeref.current.getTime();
      setRunning({ isRunning: !taskClock.isRunning });
      props.handleChange(e, currentTime);
      timeref.current.toggle();
    }
  }

  const handleSubmit = (e) => {
    props.onSave(e);
  }

  return (

    <form
      onSubmit={handleSubmit}
      style={taskClock.isRunning ? runningTaskStyle : {}}
      id={_id} className="activeTask"
      onClick={toggleClock}
    >

      <label htmlFor='project'>Project</label>
      <input
        type='text'
        className='project'
        value={project}
        onChange={e => props.handleChange(e)}
      />


      <label htmlFor='taskdesc'>Description </label>
      <input
        type='text'
        className='taskdesc'
        value={taskdesc}
        onChange={e => props.handleChange(e)}
      />

      <Clock seconds={seconds} isRunning={taskClock.isRunning} ref={timeref} />
      <input type="submit" id="savebtn" style={{ border: "none", background: "white", cursor: "pointer", display: "none" }} value="Save" />

    </form>
  )
}
