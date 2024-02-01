const mongoose=require('mongoose')





const bmsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    }


})

module.exports=mongoose.model('Bms',bmsSchema)