const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodypasrser=require("body-parser");
app.use(bodypasrser.urlencoded({extended:false}));
app.use(bodypasrser.json());

const Note=require("./models/Note");
const { deleteOne } = require("./models/Note");



mongoose.connect("mongodb+srv://MdHira:hira123@cluster0.nb6q4.mongodb.net/notesdb").then(function(){
    app.get("/",function(req,res){
       const response={message:"Api Working"};
       res.json(response);
    
    });
    
   
    app.post("/note/list",async function(req,res){
        //data fliter
        var notes=await Note.find({userid:req.body.userid});
        res.json(notes);
       
    
    });


    app.post("/note/add",async function(req,res){
        //update data
        await Note.deleteOne({id:req.body.id});
        
       //insert data mean Edit to data
        const newnote=new Note({
            id:req.body.id,
            userid:req.body.userid,
            title:req.body.title,
            content:req.body.content

        });
       await newnote.save();
       const response={message:"new note create!" + `id:${req.body.id}`};
       res.json(response)

    });
    //delete data

    app.post("/note/delete",async function(req,res){

        await Note.deleteOne({id:req.body.id});
        const response={message:"Note delete!"+ `id:${req.body.id}`};
        res.json(response);

    });

   
    
    
    

});


const PORT=process.env.PORT || 5000;
app.listen(PORT,function(){
    console.log("server started at "+PORT);
});