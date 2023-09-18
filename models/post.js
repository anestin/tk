const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
	category_id:{type:String,required:true,ref:"categories"},
	user_id:{type:String,required:true,ref:"users"},
	title:{type:String,required:true},
	body:{type:String,required:true},
	img:{type:String },
	created_at:{type:Date},
	modified_at:{type:Date},
});

const Post = mongoose.model('posts',PostSchema);

module.exports = Post;