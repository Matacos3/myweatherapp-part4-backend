var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const {checkBody} = require("../modules/checkbody")

const User = require("../models/users")

router.post("/signup",(req, res)=>{
  if (checkBody(req.body, ["email", "password"]) === false){
    // console.log(req.body)
    res.json({result : false, error:"Missing or empty fields"})
  } else{
    User.findOne({email : req.body.email}).then(userData =>{
      if(userData === null){

        const newUser = new User({
          name : req.body.name,
          email : req.body.email,
          password : req.body.password
        })
        newUser.save().then( newDoc =>{
          res.json({result : true, added: newUser})
        })
      } else{
        
        res.json({result : false, error:"User already exists"})

        
      }
    })
  }
})

router.post("/signin", (req, res) =>{
  if (checkBody(req.body, ["email", "password"]) === false){
    res.json({result : false, error:"Missing or empty fields"})

  } else{
    User.findOne({email : req.body.email, password : req.body.password}).then(user =>{
      if(user === null){
        res.json({result : false, error:"User not found"})

      } else{
        res.json({result : true})
      }
    })
  }
})

module.exports = router