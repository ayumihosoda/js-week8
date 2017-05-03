// Exercise for Week 8 Power Coding Session

// #3 Make a div and give it an ID. Using JavaScript, put some text into that element.
document.getElementById("text").innerHTML = "<p>" + "Hello World!" + "</p>"

// #4 Make a string variable and use that to put some text into an H1 using JavaScript.
var greeting = "Welcome to Codify Academy!"
document.getElementById("text2").innerHTML = "<h1>" + greeting + "</h1>"

//#5 Make a function that takes a user's input (value) and then console.logs the value. Initialize the function (make it start) when you click a button.
function getInfo() {
	var age = document.getElementById("age").value
	console.log(age)
}

// #6 Make an array with five entries. Using a loop, console.log each entry.
var students = ["Ayumi", "Nate", "Clyde", "Noa", "Yujin"]

for (i=0; i < students.length; i++) {
	console.log(students[i])
}

// #7 Create an object with at least three properties. Console.log each property.
var profileObject = {
	name: "Ayumi",
	gender: "female",
	email: "ayumi@gmail.com"
}

console.log(profileObject.name)
console.log(profileObject.gender)
console.log(profileObject.email)


// #8 Create an array with multiple objects, each with multiple properties. Use a for loop to console.log the various properties.
var profArray = [
	{ 
	name: "Ayumi",
	gender: "female",
	email: "ayumi@gmail.com"
	}, 
	{ 
	name: "Noa",
	gender: "female",
	email: "noa@gmail.com"
	}, 
	{ 
	name: "Nate",
	gender: "male",
	email: "nate@gmail.com"
	}, 
	{ 
	name: "Rachel",
	gender: "female",
	email: "rachel@gmail.com"
	}
]

for(i=0; i < profArray.length; i++) {
	if (profArray[i].gender !== "female") {
		console.log(profArray[i].name + " is not a pretty lady.")
	}
}


