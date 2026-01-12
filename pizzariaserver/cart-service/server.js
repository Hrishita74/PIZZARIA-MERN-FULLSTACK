const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");

const cartRoutes=require("./routes/cartRoutes");

const app=express();
app.use(cors());
app.use(express.json());    

mongoose.connect("mongodb://localhost:27017/PIZZARIADB")
.then(()=>console.log("MongoDb Connected..."))
.catch(err=>console.log(err));

app.use("/api/cart",cartRoutes);

app.listen(3003,()=>console.log("Cart Service is running on port 3003"));