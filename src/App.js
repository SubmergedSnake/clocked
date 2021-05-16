import { TaskList } from './components/TaskList'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {


  const [tasks, setTask] = useState([
    { id: uuidv4(), project: 'React', projectdesc: 'R of MERN', time: 0, startdt: '', lastmodified: '', active: false },
    { id: uuidv4(), project: 'Node/Express', projectdesc: 'E and N of MERN', time: 0, startdt: '', lastmodified: '', active: false },
    { id: uuidv4(), project: 'Mongo', projectdesc: 'M of MERN', time: 0, startdt: '', lastmodified: '', active: true }
  ])

  return (
    <div className='App'>
        <TaskList tasks={tasks} />
    </div>
  )
}

export default App
