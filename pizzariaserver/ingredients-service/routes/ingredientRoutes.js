const express=require("express");
const router=express.Router();

const Ingredient=require("../models/Ingredient");

router.get("/",async(req,res)=>{
    try{
        const ingrediants=await Ingredient.find();
        res.json(ingrediants);
    }catch(err){
        res.status(500).json({message:"Error Fetching Ingredients"});
    }
});

module.exports=router;