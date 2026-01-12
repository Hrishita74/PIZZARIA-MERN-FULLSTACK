const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const userRoutes=require("./routes/userRoutes");

const app=express();
app.use(cors());
app.use(express.json());    

mongoose.connect("mongodb://localhost:27017/PIZZARIADB")
.then(()=>console.log("MongoDb Connected..."))
.catch(err=>console.log(err));

app.use("/api/users",userRoutes);

app.listen(3004,()=>console.log("User Service is running on port 3004"));