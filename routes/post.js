let express = require('express');
let app = express.Router();
let Post = require('../models/post')
let Category = require('../models/category')
let User = require('../models/user')

app.get("/posts",async function(req,res){
	try{
		let posts = await Post.find().populate("user_id category_id")
		res.json(posts)
	}catch(e){}
})

app.get("/posts/:id",function(req,res){
	
})

app.post("/posts",async function(req,res){
	try{
		let {user_id,category_id} = req.body;

		let category = await Category.findById(category_id)
		let user = await User.findById(user_id)

		if(!user) return res.status(404).send({msg:"User does not exist"})
		if(!category) return res.status(404).send({msg:"Category does not exist"})

		let post = new Post(req.body);
		await post.save();
		res.send(post)
	}catch(e){
		res.status(500).send(e.message)
	}
})

app.put("/posts/:id",function(req,res){
	
})

app.delete("/posts/:id",function(req,res){
	
})

module.exports = app