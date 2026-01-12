const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const pizzasRoutes=require("./routes/pizzaRoutes");

const app=express();
app.use(cors());
app.use(express.json());    

mongoose.connect("mongodb://localhost:27017/PIZZARIADB")
.then(()=>console.log("MongoDb Connected..."))
.catch(err=>console.log(err));

app.use("/api/pizzas",pizzasRoutes);

app.listen(3001,()=>console.log("Pizza Service is running on port 3001"));