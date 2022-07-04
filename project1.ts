import { error } from "console";

import express from 'express'
import moongoose from 'moongoose'
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

const arr = [1,5,4,3]
const reverse = (arr)=>{
	const reversedArr = []
	for(let i = 0; i<arr.length;i++){
		reversedArr.push(arr[i])
	}
	return reversedArr
}
const Arr = [0, 1, false, 2, undefined, '', 3, null]
const compact = (Arr)=> Arr.filter((el)=>el);

const array = [1, 2, 3, 1, 2]

const unique = (array)=> array.filter((element,id)=>array.indexOf((element === id)))

const arr1 = [1,2,3]
const arr2 = [1,2,3]

const compared = (arr1,arr2)=>{

	if(arr1.length != arr2.length){
		return false
	}
	const isEqual = arr1.map((el,id)=>arr2[id]===el);
	return !isEqual.include(false)
}

const obj = ({ a: 1, b: 2 })//=> [['a', 1], ['b', 2]]

const makepairs = (object)=> Object.entries(object)

const makePairs2 = (object) => Object.keys(object).map((el) => [el, object[el]]);

const makePairs3 = (object) => {
  const result = [];

  for (const prop in object) {
    if (object.hasOwnProperty(prop)) {
      result.push([prop, object[prop]]);
    }
  }

  return result;
};





















