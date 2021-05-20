import '../css/Task.css'
const prettyMilliseconds = require('pretty-ms');



export const Task = props => {

  const {_id, project, taskdesc, seconds} = props.task;

  return (
    <form id={_id} onClick={props.handleClick}>
      <label htmlFor='project'>Project</label>
      <input
        type='text'
        className='project'
        value={project}
        disabled
      />

      <label htmlFor='taskdesc'>Description </label>
      <input
        type='text'
        className='taskdesc'
        value={taskdesc}
        disabled
      />
 <div className="time" style={{textAlign:"center", fontSize:"2em"}}>{prettyMilliseconds(seconds * 1000)}</div>

    </form>
  )
}
