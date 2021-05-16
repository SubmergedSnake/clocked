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
    },
    startdt: {
        type: Date,
    },
    lastmodified: {
        type: Date,
    },
    active: {
        type: Boolean,
    },

}, {
    timestamps: true,
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;