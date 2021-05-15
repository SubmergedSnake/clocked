import { TaskList } from './components/TaskList'
import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {


const [tasks, setTask] = useState([
  { taskid: 123, project: 'React', projectdesc: 'R of MERN', time: 1 },
  {
    taskid: 321,
    project: 'Node/Express',
    projectdesc: 'E and N of MERN',
    time: 3
  },
  { taskid: 231, project: 'Mongo', projectdesc: 'M of MERN', time: 2 }
])

return (
  <div className='App'>
    <div className='flex-parent'>
      <div className='flex-child'>
        <TaskList tasks={tasks} />
      </div>
      <div className='flex-child'>
        <p style={{ textAlign: "center" }}> asdf</p>
      </div>
    </div>
  </div>
)
}

export default App
