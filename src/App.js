import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { TaskList } from './components/TaskList'
import { About } from './components/About'
import { Navbar } from './components/Navbar';

import './App.css'

function App() {

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Redirect exact from="/" to="/tasklist" />
          <Route path="/tasklist" component={TaskList} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
