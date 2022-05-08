const  mongoose  = require("mongoose");

const StaffMemberSchema =  new mongoose.Schema({
    fullName:{type:String,required:true},
    gender:{type:String,required:true},
    birthDay:{type:Date,required:true},
    roleid:{type:Number,required:true},
    address:{type:String,required:true},
    mobile:{type:Number,required:true},
    email:{type:String,required:true},
    image:{type:String,required:true},
})

const staffmember = mongoose.model("staffmemberdatas",StaffMemberSchema);
module.exports = staffmember;