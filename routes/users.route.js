const express=require("express");
const router=express.Router()
const {getAllUsers,createUsers, updateUsers,deleteUser} = require("../controllers/users.controller");

router.get("/",getAllUsers)
router.post("/",createUsers)
router.put("/:id",updateUsers)
router.delete("/:id",deleteUser)


module.exports=router;