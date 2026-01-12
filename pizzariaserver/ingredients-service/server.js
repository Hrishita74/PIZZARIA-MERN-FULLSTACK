const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const ingredientsRoutes=require("./routes/ingredientRoutes");

const app=express();
app.use(cors());
app.use(express.json());    

mongoose.connect("mongodb://localhost:27017/PIZZARIADB")
.then(()=>console.log("MongoDb Connected..."))
.catch(err=>console.log(err));

app.use("/api/ingredients",ingredientsRoutes);

app.listen(3002,()=>console.log("Ingredients Service is running on port 3002"));