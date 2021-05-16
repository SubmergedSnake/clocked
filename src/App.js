import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TaskList } from './components/TaskList'
import { About } from './components/About'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Router>
        <Route path="/" exact component={TaskList} />
        <Route path="/about" exact component={About} />
      </Router>
    </div>
  )
}

export default App
