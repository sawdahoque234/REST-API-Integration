const express=require("express")
const cors=require('cors')
const usersRouter=require('./routes/users.route')
const bodyParser=require("body-parser")
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use("/users",usersRouter)
//home
app.get('/', (req,res)=>{
res.sendFile(__dirname+ "/views/index.html")
})
//not found
app.use((req,res,next)=>{
res.status(404).json({message:"route not found!!!"})
})








module.exports=app;