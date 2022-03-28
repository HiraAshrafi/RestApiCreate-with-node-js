const mongoose= require("mongoose");

const noteschema=mongoose.Schema({
    id:
    {
        type:String,
        unique:true,
        required:true,

    },
    userid:
    {
        type:String,
        required:true,
    },
    title:
    {
        type:String,
        required:true,
    },
    content:
    {
        type:String,
    },
    dateaddied:
    {
        type:Date,
        default:Date.now,
    }
    

});

module.exports= mongoose.model("Note",noteschema);

