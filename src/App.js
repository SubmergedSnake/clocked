import Task from './components/Task'
import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App () {

  const [task, setTask] = useState({
    taskid: 123,
    project: 'React',
    projectdesc: 'An attempt to learn React',
    time: 1
  })

  return (
    <div className='App'>
      <Task task={task} />
    </div>
  )
}

export default App
