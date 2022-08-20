const async = require("async");



const promise = new Promise(function(resolve,reject){
const string1 = "Sanjeev"
const string2 = "Sanjeev";
if(string1===string2){
	resolve(true);
}
else{
	reject();
}
})
promise.then(function(){
	console.log('promise resolved successfully')
}).catch(function(){
	console.log('promise not resolved')
});

let listofFunction = [
	()=>{
		console.log('Asynchronus function called')
	},

	async ()=> { new Promise((resolve)=>{
		setTimeout(()=>{
			console.log('Asynchronus function resolvd');
			resolve(true)
		},1000)
	})

	}
]

let executionlistofFunction1 = async(listofFunction) => {
	for(let func of listofFunction){
		await func()
	}
}

executionlistofFunction1(listofFunction);

//2nd approch

let executionlistofFunction2 = async(listofFunction) =>{
	return Promise.all(listofFunction.map(func=>func()))

}

function square(x){
	(resolve)=>{
		setTimeout(()=>{
			resolve(Math.pow(x,2))
		},2000)
	}
}

async function output(x){
	const ans = await square(x);
	console.log(ans)
}

output(10);

/********/
function add(x,y){
	resolve =>{
		setTimeout(()=>{
			resolve(x+y)
		},2000)
	}
}

async function sum(x,y){
	const sum = await add(x,y)
}

add(10,20)

const arr = [5, 6, 7, 8, 9, 2, 6, 3, -4, 0, -9, -6];

const filteredArr = [];

const filter = arr.filter((element)=>element<0)

console.log(filter)

const numbers = [56,43,56];
const result = numbers.every((el)=>el<100)




