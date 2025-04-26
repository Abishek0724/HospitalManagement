const express=require('express');
const cors =require('cors');
const mongoose=require('mongoose');
require('dotenv').config();

const app=express();
const PORT =process.env.PORT||5000;
//middleware
app.use(cors());
app.use(express.json());//to parse json body
//mongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.group("MongoDB Connected"))
.catch(err=>console.log(err));
//sample testmode
app.get("/",(req,res)=>{
    res.send("API is runnig...");
});

//Start server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);

});
