const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    project: {
        type: String,
        required: true,
        minlength: 5
    },
    taskdesc: {
        type: String,
    },
    time: {
        type: Number,
    }
}, {
    timestamps: true,
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;