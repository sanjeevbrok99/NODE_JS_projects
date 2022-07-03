import moongoose from 'moongoose';
const DB = 'mongodb://localhost:27017/GFG'
moongoose.connect(DB,{
	useNewUrlParser: true,
	useUnifiedTopology: true,
        useFindAndModify: false
})

const employeeSchema = new moongoose.Schema({
	name : String,
	department: String,
	city : String,
	salary: String
})

const Employee = new moongoose.model('employee',employeeSchema)

Employee.aggregate([{
	$group:{
		id:{department:"$department"},
		totalemployee:{$sum : 1},
		averagSalary:{ $avg : 1}
	}

	}]).then(result =>{
		console.log(result)
	})
	.catch(error=>{
		console.log(error)
	})