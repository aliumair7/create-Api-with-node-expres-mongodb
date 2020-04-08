const express=require("express")
const app=express()
//import mongoose
const mongoose=require("mongoose")

//database Connection
require("./mongos")

//import post file
require("./Post")

const Post=mongoose.model("Post")

app.get("/posts",(req,res)=>{
    
        const posts=Post.find({})
        res.send(posts)
        
    

})



app.listen(3003,()=>(console.log("Server is running at port 3003")))