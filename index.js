let express = require('express');
let mongoose = require('mongoose');
let app = express();
require('dotenv').config();

let user = require('./routes/user');
let category = require('./routes/category');
let post = require('./routes/post');

let PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_URL,{
	useNewUrlParser:true,
	useUnifiedTopology:true
});
mongoose.connection.on('open',()=>console.log('Server connected'));
mongoose.connection.on('error',(e)=>console.log(e));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1',user);
app.use('/api/v1',post);
app.use('/api/v1',category);

app.listen(PORT);
console.log("App is running on "+PORT);
