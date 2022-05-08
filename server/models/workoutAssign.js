const  mongoose  = require("mongoose");

const workoutAssignSchema =  new mongoose.Schema({
    membername:{type:String,required:true},
    workoutplan:{type:String,required:true},
   
})

const workoutAssign = mongoose.model("workoutAssign",workoutAssignSchema);
module.exports = workoutAssign;