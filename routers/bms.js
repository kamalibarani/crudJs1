const express = require('express')
const router=express.Router()
const Bms=require('../models/bms')

router.get('/',async(req,res)=>{
    try{
        const bms=await Bms.find()
        res.json(bms)

    }catch(err){
        res.send('Error' +err)
    }
    
})

router.get('/:id',async(req,res)=>{
    try{
        const bms=await Bms.findById(req.params.id)
        res.json(bms)

    }catch(err){
        res.send('Error' +err)
    }
    
})
router.post('/',async(req,res)=>{
    const bms=new Bms({
        name:req.body.name,
        dept:req.body.dept
    })

    try{
        const a1=await bms.save()
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const bms=await Bms.findById(req.params.id)
        bms.dept=req.body.dept
        const a1=await bms.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})
module.exports=router