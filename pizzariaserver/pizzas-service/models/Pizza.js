const mongoose=require("mongoose");

const pizzaSchema=new mongoose.Schema({
    id:String,
    type:String,
    price:Number,
    image:String,
    description:String,
    ingredients:[String],
    topping:[String]
});

module.exports=mongoose.model("Pizza",pizzaSchema);