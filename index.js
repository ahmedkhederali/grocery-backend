require("dotenv").config();
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const Port = process.env.PORT || 5000;
const path=require('path')
const multer=require("multer")


//MiddleWare
app.use(express.static("./client/build"));
app.use(express.json());

app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.get("/", (req, res) => {

  res.status(200).json({mag:"Done Welcome"});
});

//Route
app.use("/api", require("./routes/userRouter1"));
app.use("/api", require("./routes/catergoryRouter"));
app.use("/api", require("./routes/upload"));
app.use("/api", require("./routes/productRouter"));

const URL = process.env.MONGO_URL;
mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("connect DB");
  });

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('grocery/build'))
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'grocery','build','index.html'))
  })
}


app.listen(Port,()=>{
  console.log("Server Running on Port 5000")
})