import http from 'http'
const port = 3000;
http.createServer((req,res)=>{

	const mailer = require("@sendgrid/mail");

	mailer.setApikey("x34fkiednfkgnfdjrjkir")

	const message = {
		to: ["mishragsaneev1999@gmail.com"],
		from: "helloworld@gmail.com",
		subject: "This is for demo purpose",
		html: "<h1> New messege from Sanjeev Mishra</h1>",
		"<p> some demo text from sanjeev mishra </p> "		


	}
	mailer.send(message,function(err,json){
		if (err){
			res.write("message cant be sent")
		}
		else{
			res.write("mail sent to Sanjeev Mishra")
		}
	})
		res.end()																																							
})

.listen(port,()=>{console.log(`server is running on port 3000`)})