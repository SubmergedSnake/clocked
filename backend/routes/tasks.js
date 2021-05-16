const router = require('express').Router();
let Task = require('../models/task.model');


/*Get all tasks*/
router.route('/').get((req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(400).json(`Error ${err}`));
});

/*Add a new task*/
router.route('/add').post((req, res) => {
    const { project, taskdesc } = req.body;
    console.log(`In the backend, got project: ${project}, taskdesc: ${taskdesc}`)


    const newTask = new Task({ project, taskdesc, time: ''});

    newTask.save()
        .then(() => res.json('Task added!'))
        .catch(err => res.status(400).json(`Error ${err}`))
});

/*Get as task by id*/
router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => ers.status(400).json('Error: ' + err));
});

/*Delete a task by id*/
router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

/*Update a task*/
router.route('/update/:id').post((req, res) => {
    console.log(`Updating task with following properties: ${JSON.stringify(req.body)}`);
    Task.findById(req.params.id)
        .then(task => {
            task.project = req.body.project;
            task.taskdesc = req.body.taskdesc;
            task.time = req.body.time;

            task.save()
                .then(() => res.json('Excercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        });
})

module.exports = router;