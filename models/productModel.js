const mongoose = require("mongoose");
const ChangeDateSchema = new mongoose.Schema({
    date: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
      default: 0,
    },
  });
const ProductSchema = new mongoose.Schema({
    product_id:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
    title:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        trim:true,
        required:true
    },
    description:{
        type:String,
        required:true
    },
  
    changeDate: {
        type: [ChangeDateSchema],
        default: [],
    },
 
  
    images:{
        type:Object,
        required:true
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },

},{timestamps:true})
module.exports = mongoose.model("Product", ProductSchema);