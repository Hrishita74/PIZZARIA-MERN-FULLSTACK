const mongoose=require("mongoose");

const cartSchema=new mongoose.Schema({
    name:String,
    price:Number,
    quantity:Number,
    extras:[String],
    totalPrice:Number
});

module.exports=mongoose.model("Cart",cartSchema);
