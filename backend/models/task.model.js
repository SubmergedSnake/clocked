const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    project: {
        type: String,
    },
    taskdesc: {
        type: String,
    },
    seconds: {
        type: Number,
    },
    active: {
        type: Boolean
    }
}, {
    timestamps: true,
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;