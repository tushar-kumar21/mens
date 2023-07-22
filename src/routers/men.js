const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens")

router.post("/mens",async(req,res)=>{
    try{
          const addingMenRecords = new MensRanking(req.body)
          console.log(req.body)
          const insertMens = await addingMenRecords.save();
          res.send(insertMens);
    }catch(e){
    res.status(400).send(e)
    }
})
router.get("/mens",async(req,res)=>{
    try{
          const getMens = await MensRanking.find({}).sort({"ranking":1});
          res.status(201).send(getMens);
    }catch(e){
    res.status(400).send(e)
    }
})

//we will handle get req of individual
router.get("/mens/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findById({_id});
        res.send(getMen);
    }catch(e){
        res.status(400).send(e)
    }
})

//we will handle get req of individual
router.patch("/mens/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(getMen);
    }catch(e){
        res.status(500).send(e)
    }
})

//we will handle delete req of individual
router.delete("/mens/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id)
        res.send(getMen);
    }catch(e){
        res.status(500).send(e)
    }
})

router.get("/", async(req, res)=>{
 res.send("hello from the tushar kumar")
})

module.exports = router;