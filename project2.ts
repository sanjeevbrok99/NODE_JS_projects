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


	let array = ["Hello", "GeeksforGeeks", "JavaScript"];
let firstElement = array.shift();
console.log(firstElement);
console.log(array);

let array1 = ["Hello", "Sanju", "JavaScript"];
array1.unshift("React");
console.log(array1);

let array2 = ["Hello", "Sanjeev", "JavaScript"];
console.log(array2.includes("sanju"));
console.log(array2.includes("React"));

let array3 = ["Hello", "eeks", "JavaScript"];
console.log(array3);
array.sort();
console.log(array3);

let people_details = [
    {name: "ABC", age: 18},
    {name: "GeeksforGeeks", age: 30},
    {name: "DEF", age: 50},
  ];

  let data = people_details.map((el)=> el.age>30);
  console.log(data)

 let blood_groups_data = [
    { name: "ABC", age: 19, blood_group: "B+" },
    { name: "DEF", age: 20, blood_group: "AB+" },
    { name: "JOHN", age: 25, blood_group: "A+" },
    { name: "APPLE", age: 45, blood_group: "B+" },
    { name: "PETER", age: 48, blood_group: "AB-" },
    { name: "JAMES", age: 53, blood_group: "B+" },
  ];

let filterdata = blood_groups_data.map((person)=>person.age>18&&person.blood_group==="B+")

console.log(filterdata)

var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];

const reoveduplicate = (arr)=> arr.filter((item,id)=>arr.indexOf(item)===id)


function removeDuplicates(arr) {
        var unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
 
    console.log(removeDuplicates(arr));

var arr1 = [4, 8, 7, 13, 12];
var sum = 0;
  
    arr1.forEach(x=>sum+=x);

    
















var input = [97, 43, 23, 12, 0, 1, 23, 43, 90, 1] 
//output = [0, 1, 12, 23, 43, 90, 97]



const removeduplicate = input.filter((c,index)=>{
    return input.indexOf(c) !== index;
})

const output = removeduplicate.sort();
console.log(output);



