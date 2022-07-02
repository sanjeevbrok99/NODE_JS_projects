import { error } from "console";

const express = require('express');
const moongoose = require('moongoose');
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))

const MONGODB_URL = 'mongodb://127.0.0.1/pagination';

moongoose.connect(MONGODB_URL,{
    useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
}).then(()=> {console.log('database is connected')})
.catch((error)=>{
	console.log('error in connecting database')
});

// creating schema for posts
const postSchema = new moongoose.Schema({
	name : String,
	date : {
		type : Date,
		Default : Date.now()
	}
	})
const postmodel = new moongoose.model('postmodel',postSchema)
//for creating post

app.post('/',async(req,res)=>{
	const post =new postmodel(req.body)
	await post.save();
	res.status(201).send('succesfully created')
})
//for fetching post
app.get('/',async(req,res)=>{
	// adding pagination
	try{
		const limitvalue = req.query.limit || 2;
		const skipvalue = req.query.skip || 0;
		const posts = await postmodel.find().limit(limitvalue).skip(skipvalue);
		res.status(200).send(posts)
	}
	catch(e){
		console.log(e)
	}
})

app.listen(port, () => {
	console.log(`started at $(port)`);
})



















