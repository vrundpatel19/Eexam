const mongoose = require("mongoose")


//schema 
let RoleSchema = new mongoose.Schema({
    roleName:{
        type:String
    }
})

//model 
let RoleModel = mongoose.model("role",RoleSchema) //roles 

module.exports = RoleModel 