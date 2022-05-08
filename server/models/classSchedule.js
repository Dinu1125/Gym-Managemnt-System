const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classScheduleSchema = new Schema({

    className: { type: String },
    staffName: { type: String },
    location: { type: String },
    fee: { type: Number },
    startTime: { type: String },
    endTime: { type: String },
});

const ClassSchedule = mongoose.model('ClassSchedule', classScheduleSchema)
module.exports = ClassSchedule;