let express = require('express');
let app = express.Router();
let Category = require('../models/category')

app.get("/category",function(req,res){

})

app.get("/category/:id",function(req,res){
	
})

app.post("/category",async function(req,res){
	try{
		let category = new Category(req.body);
		await category.save();
		res.send(category)
	}catch(e){
		res.status(500).send(e.message)
	}
})

app.put("/category/:id",function(req,res){
	
})

app.delete("/category/:id",function(req,res){
	
})

module.exports = app