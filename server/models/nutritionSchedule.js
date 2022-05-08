const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nutritionScheduleSchema = new Schema({

    name: { type: String },
    weight: { type: String },
    gender: { type: String },
    members: { type: Number },
});

const NutritionSchedule = mongoose.model('NutritionSchedule', nutritionScheduleSchema)
module.exports = NutritionSchedule;