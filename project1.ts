

/*const express = require('express');

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
const userSchema = new moongoose.Schema({
	name : String,
	Email : String
	})
const usermodel = new moongoose.model('postmodel',userSchema)
//for creating post

app.post('/',async(req,res)=>{
	const post =new usermodel(req.body)
	await post.save();
	res.status(201).send('succesfully created')
})

app.post('/login',async(req,res)=>{

})



*/




//for fetching post
/*app.get('/',async(req,res)=>{
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
})*/

/*app.listen(port, () => {
	console.log(`started at $(port)`);
})*/

/*const arr = [1,5,4,3]
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
let value = [5, 3, 9, 10, 50, 100];
    let i;
    for(i = 1; i <= 4; i++) {
      value[i] = 15;
    } 
    console.log(value);
let value1 = [];
  
    // An empty array is taken
    let  length1 = 5;
    for(let i = 0; i < length1; i++) {
      value1.push(10);
    } 
    console.log(value1);


let array3 = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
  console.log("Before filtering non unique values: " + array);

const Unique = array3.filter((value,index)=>{
	return array3.indexOf(value)===array3.lastIndexOf(value)
})
*/

const callback = function(error,success){
	if(error){
		console.log('There is no success');
	}
	else{
		console.log('Hola! You are succesfull')
	}

	
}

const error = function(){
	console.log('uff there is erorr')
}
const success = function(){
	console.log("Hola! there is a success ")
}

const caller = function(status){
	return new Promise(function(resolve,reject){
		if(status === 'happy'){
			resolve('success');
		}
		else {
			reject()
		}

	})
}

caller('happy').then(success).catch(error)

 function add(a,b){
	return new Promise((resolve,reject)=>{
		const sum = a+b;
		if (sum == 5){
			resolve('success')
		}
		else{
			reject('failure')
		}
	})
}

add(2,2).then(response=>console.log(response)).catch(error=>console.log(error))	

function delay(ms){
	return new Promise((resolve,reject)=>{
		setTimeout(resolve,ms)
	})
}

delay(3000).then(res=>console.log('5 second have passed')).catch(error)



let n = 100
for ( let i=2;i<n/2;i++ ){
	let flag = 0
     if(n%i===0){
     	console.log('nothing')
     	flag =1
     	break;
     }
     
}	

if(i>1 && flag=0)
{console.log(i)}


constaa number = parseInt(prompt('Enter a number:'));
let n1=0,n2= 1, nextterm;
console.log('Fibnocchi series:');
console.log(n1);
console.log(n2);
nextterm = n1+n2

while (nextterm<=number){         
  console.log(nextterm);
  
  n1=n2;
  n2=nextterm;
  nextterm= n1+n2
  console.log(n1)
}























