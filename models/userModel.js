const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  fnName: {
    type: String,
    required:true
  },
  lsName: {
    type: String,
    required:true
  },
  email: {
    type: String,
    tirm: true,
    unique:true,
    
  },
  password: {
    type: String,
    required:true
  },
  admin:{
    type:Boolean,
    default:false
}
},{timestamps:true});
module.exports = mongoose.model("User", UserSchema);
