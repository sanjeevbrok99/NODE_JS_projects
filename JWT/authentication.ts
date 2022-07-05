import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'

const app = express();
dotenv.config();
let PORT = process.env.port || 5000;
app.listen(PORT,()=>{
	console.log(`Server is running on ${PORT}`)
})

app.post("/user/generateToken",(req,res)=>{
	let jwtsecretkey = process.env.JWT_SECRET_KEY
	let data = {
		time: Date(),
		userId: 12
	}
	const token = jwt.sign(data,jwtsecretkey);

	res.send(token)
})

app.get("/user/validtoken",(req,res)=>{
	let tokenHeaderkey = process.env.TOKEN_HEADER_KEY;
	let jwtsecretkey = process.env.JWT_SECRET_KEY;
	try{
		const token = req.header(tokenHeaderkey)
		const verified = jwt.verify(token,jwtsecretkey)
		if(verified){
			return res.send('Scuccesfully Verified') 
		}else{
			return res.status(401).send("error")
		}
	}catch{
		res.status(401).send('error')
	}
})
const arr = [5, 6, 7, 8, 9, 2, 6, 3, -4, 0, -9, -6];

const filteredArr = [];

const filter = arr.filter((element)=>element<0)

console.log(filter)
