
let users=require('../models/users.model')
const {v4:uuid4}=require("uuid")
//get
const getAllUsers=(req,res)=>{
    res.status(200).json({users})
}
//post
const createUsers=(req,res)=>{
    const newUser={
        id:uuid4(),
    username:req.body.username,
    email: req.body.email,
    phone:req.body.phone,
    address:req.body.address
    };
    users.push(newUser)
    res.status(201).json(users)
}
//update
const updateUsers=(req,res)=>{
    const userid=req.params.id
    const{username,email,phone,address}=req.body
    users.filter((user)=>user.id===userid).map((selecteduser)=>{
        selecteduser.username=username;
        selecteduser.email=email;
        selecteduser.phone=phone;
        selecteduser.address=address;
    })
    res.status(201).json(users)
}
//delete
const deleteUser=(req,res)=>{
    const userid=req.params.id
    users=users.filter((user)=>user.id !== userid)
    res.status(201).json(users)
}

module.exports={getAllUsers,createUsers,updateUsers,deleteUser};