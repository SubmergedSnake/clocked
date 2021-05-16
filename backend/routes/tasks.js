const router = require('express').Router();
let Task = require('../models/task.model');

router.route('/').get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/add').post((req, res) => {
   
    
    const {project, taskdesc} = req.body;
    const startdt = new Date();
    const active = true;
    console.log(`In the backend, got project: ${project}, taskdesc: ${taskdesc}`)


    const newTask = new Task({project, taskdesc, time: '', startdt, lastmodified: '', active });

    newTask.save()
    .then(() => res.json('Task added!'))
    .catch(err => res.status(400).json(`Error ${err}`))
});

module.exports = router;