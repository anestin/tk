const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
	name:{type:String,required:true},
	created_at:{type:Date},
	modified_at:{type:Date},
});

const Category = mongoose.model('categories',CategorySchema);

module.exports = Category;