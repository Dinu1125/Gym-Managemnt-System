const  mongoose  = require("mongoose");

const MemberSchema =  new mongoose.Schema({
    memberid:{type:String,required:true},
    fullName:{type:String,required:true},
    gender:{type:String,required:true},
    birthDay:{type:String,required:true},

    address:{type:String,required:true},
    mobile:{type:Number,required:true},
    email:{type:String,required:true},

    weight:{type:Number,required:true},
    height:{type:Number,required:true},

    staffmember:{type:String,required:true},
    class:{type:String,required:true},
    
})

const member = mongoose.model("memberdatas",MemberSchema);
module.exports = member;