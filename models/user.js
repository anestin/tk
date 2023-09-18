const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	fullname:{type:String,required:true},
	email:{type:String,required:true,unique:true},
	phone:{type:String,required:true},
	passwd:{type:String,required:true},
	created_at:{type:Date,default:()=>Date.now()},
	modified_at:{type:Date,default:()=>Date.now()},
});

const User = mongoose.model('users',UserSchema);

module.exports = User;