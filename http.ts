const express = require('express');
const app = express();

app.get('/',(req,res)=>{
	res.send('unknow route')
	console.log('respons is coming')
})

app.get('/Rediit',(req,res,next)=>{
	res.send("we are on reddit server")
	console.log('we are on reddit server')
})

app.post('/reddis/comment',(req,res,next)=>{
	res.send("New comment")
	console.log('Hello I am Sanjeev Mishra')
})

app.listen(3000,()=>{
	console.log('server is running on port 3000')
})