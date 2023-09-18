let express = require('express');
let app = express.Router();
let User = require('../models/user')

app.get("/users",async function(req,res){
	try{
		let users = await User.find();
		res.json(users);

	}catch(err){
		res.status(500).send(err.message)
	}
})

app.get("/users/:id",async function(req,res){
	try{
		let {id} = req.params;
		let user = await User.findById(id);
	
		res.send(user)
	}catch(e){
		res.status(500).send(e.message)
	}
})

app.post("/users",async function(req,res){
	try{
		let user = new User(req.body);
		await user.save();
		res.send(user)
	}catch(e){
		res.status(500).send(e.message)
	}
})

app.post("/users/auth",async function(req,res){
	try{
		let {email,passwd} = req.body;
		let user =  await User.findOne({email,passwd});
		
		if(!user) return res.json({msg:"Invalid credential"})
		
		res.send(user)
	}catch(e){
		res.status(500).send(e.message)
	}
})


app.put("/users/:id",function(req,res){
	
})

app.delete("/users/:id",function(req,res){
	
})

module.exports = app