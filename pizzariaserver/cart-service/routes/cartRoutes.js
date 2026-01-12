const express=require("express");
const router=express.Router();

const Cart=require("../models/Cart");

//Add item
router.post("/",async(req,res)=>{
    try{
        const cartItem=new Cart(req.body);
        await cartItem.save();
        res.json(cartItem);
    }catch(err){
        res.status(500).json({message:"Error Adding Item to Cart"});
    }
});

//Get all items
router.get("/",async(req,res)=>{
    try{
        const items=await Cart.find();
        res.json(items);
    }catch(err){
        res.status(500).json({message:"Error Fetching Cart"});
    }
});

//Update item
router.put("/:id",async(req,res)=>{
    try{
        const updatedItem=await Cart.findByIdAndUpdate(
            req.params.id,
            {
                quantity:req.body.quantity,
                totalPrice:req.body.totalPrice
            },
            {new:true}
        );
        res.json(updatedItem);
    }catch(err){
        res.status(500).json({message:"Error Updating Item in Cart"});
    }
});

//Delete item
router.delete("/:id",async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.json({message:"Item Removed from Cart"});
    }catch(err){
        res.status(500).json({message:"Error Deleting Cart Item"});
    }
});

module.exports=router;