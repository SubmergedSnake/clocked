import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { TaskList } from './components/TaskList'
import { About } from './components/About'
import { Navbar } from './components/Navbar';

import './App.css'

function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Route path="/tasklist" exact component={TaskList} />
        <Route path="/about" exact component={About} />
      </Router>
    </div>
  )
}

export default App
