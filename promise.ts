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














