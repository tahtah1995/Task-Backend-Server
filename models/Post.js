
const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    Name:{
        
        type:String ,
        required: true
    },
    Department:{
        
        type:String ,
        required: true
    } ,
    Mobile:{
        
        type:String ,
        required: true
    },
   
    Days:{
        
        type:Number ,
        required: true
    },

    StartDate:{
        type:Date ,
         default:Date.now ,
        
    } 
});

module.exports = mongoose.model('Posts', PostSchema)