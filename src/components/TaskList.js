import React, { useEffect } from 'react'
import { Task } from './Task'
import { ActiveTask } from './ActiveTask'
import PropTypes from 'prop-types'
import { useState } from 'react'
import axios from 'axios';
import '../css/TaskList.css';


export const TaskList = props => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log(`Refreshed TaskList`);
    axios.get('http://localhost:5000/tasks', {},)
      .then(res => setTasks([...res.data]))
      .catch(err => console.log(err));
  }, [])


  const addTask = () => {

    deactivatePreviousTask(tasks);

    axios.post('http://localhost:5000/tasks/add', {},)
      .then(res => {
        console.log(`Add task returned:${res.data}`)
        const newTasks = [...tasks, res.data];
        setTasks([...newTasks]);
      })
      .catch(err => console.log(err));
  }

  const saveChanges = (e) => {
    e.preventDefault();
    console.log(`Running saveChanges function`);
    const taskID = e.target.closest('form').id;
    const editedTask = tasks.find(task => task._id === taskID);
    console.log(`trying to save changes for task ${taskID}, task contents: ${editedTask.toString()}`)
    axios.post(`http://localhost:5000/tasks/update/${taskID}`, editedTask,)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => {

        const savebtn = document.querySelector('#savebtn');
        console.log(`In saveChanges function, finally block, savebtn: ${savebtn}`)
        if (savebtn) {
          savebtn.style.display = 'none';
        }
      })
  }

  const showSaveBtn = () => {
    const savebtn = document.querySelector('#savebtn');
    savebtn.style.display = 'block';
  }

  const editTask = (e, seconds) => {
    console.log('Editing task in state...');
    const taskID = e.target.closest('form').id;
    const newTasks = [...tasks];
    let index = newTasks.findIndex(task => task._id == taskID);
    if (seconds) {
      newTasks[index]["seconds"] = seconds;
    } else {
      newTasks[index][e.target.className] = e.target.value;
    }
    setTasks(newTasks);
    showSaveBtn();
  }

  const deactivatePreviousTask = (tasks) => {
    {/*Deactivate old task if necessary*/ }
    let index = tasks.findIndex(task => task.active);
    console.log(`index is ${index}`)
    if (index > -1) {
      tasks[index].active = false;
      const taskID = tasks[index]["_id"];
      axios.post(`http://localhost:5000/tasks/update/${taskID}`, tasks[index],)
        .then(res => console.log(`Deactivated succesfully: ${res.data}`))
        .catch(err => console.log(err));
    }
  }

  const activateTargetTask = (tasks, taskID) => {
    {/*Activate new task*/ }
    console.log(`Trying to find task with id ${taskID} to activate it.`)
    let index = tasks.findIndex(task => task._id === taskID);
    console.log(`Found index in activateTargetTask ${index}`);
    tasks[index].active = true;
    console.log(`Target task is ${JSON.stringify(tasks[index])}`);
    axios.post(`http://localhost:5000/tasks/update/${taskID}`, tasks[index],)
      .then(res => console.log(`Activated succesfully: ${res.data}`))
      .catch(err => console.log(err));
  }



  const handleClick = (e) => {

    const taskID = e.target.tagName == 'FORM' ? e.target.id : (e.target.tagName == 'DIV' ? e.target.parentElement.id : '');
    console.log(`Attempting to handle click for target ${e.target}, taskID ${taskID}`);
    if (taskID) {
      console.log(`Got targetID, handling click for id ${taskID}`)
      const newTasks = [...tasks];
      deactivatePreviousTask(newTasks);
      activateTargetTask(newTasks, taskID);
      setTasks(newTasks);
    }
  }

  const activeTask = tasks.find(task => task.active);

  return (

    <div className='flex-parent'>
      {/* Inactive tasks */}
      <div className='flex-child-1'>
        {tasks.length > 0 && tasks.map(task => {
          return !task.active && <Task key={task._id} task={task} handleClick={handleClick} handleChange={editTask} />
        })}
      </div>

      {/*Active task, show add button if there is none*/}
      <div className='flex-child-2'>
        <div style={{ textAlign: "center" }} id='activeTaskContainer'>
          {activeTask != undefined ?
            <div><ActiveTask key={activeTask._id} task={activeTask} handleChange={editTask} onSave={saveChanges} />
              <button id="newTask" onClick={addTask}>Add new Task...</button></div> :
            <button id="newTask" onClick={addTask}>Add new Task...</button>}
        </div>
      </div>


    </div>
  )

}

TaskList.propTypes = {
  tasks: PropTypes.array
}
