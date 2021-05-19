import { useState } from 'react'
import '../css/Task.css'
const prettyMilliseconds = require('pretty-ms');



export const Task = props => {

  const {id, project, taskdesc, seconds} = props.task;

  return (
    <form id={id} onClick={props.handleClick}>
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
 <div className="time" style={{textAlign:"center", fontSize:"2em"}}>{prettyMilliseconds(seconds * 1000)}</div>

    </form>
  )
}
