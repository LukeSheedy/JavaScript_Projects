
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    var myFather = new Person("John", "Doe", 50, "blue");
    document.getElementById("test").innerHTML =
    "My father is " + myFather.age + "."; 
}



function Ride_Function() {
	var Height, Can_ride;
	Height = document.getElementById("Height").value;
	Can_ride = (Height < 52) ? "You are too short ":"You are tall enough ";
	document.getElementById("Ride").innerHTML= Can_ride + "to ride.";
}

function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are to young ": "Congrats go ahead ";
    document.getElementById("Vote").innerHTML= Can_vote + "to vote!";
}

function Vehicle (Make, Model, Year, Color) {
	this.Vehicle_Make = Make;
	this.Vehicle_Model = Model;
	this.Vehicle_Year = Year;
	this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper",2020,"Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019,"White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
	document.getElementById("New_and_This").innerHTML =
	"Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
	" manufactured in " + Erik.Vehicle_Year;
}

function Dog (Breed,Gender,Age){ /*Constructor for Dog Object*/
    this.Dog_Breed= Breed;
    this.Dog_Gender= Gender;
    this.Dog_Age= Age; 
}
var myDog = new Dog("Rotwiler","Female","4");
function theDog() {
document.getElementById("Constructors").innerHTML = "My dog is " +myDog.Dog_Gender+".";
}



function Nested_Function() {
	document.getElementById("Counting").innerHTML= Count();
	function Count() {
		var Starting_point = 9;
		function Plus_one() {Starting_point +=1;}
		Plus_one();
		return Starting_point;
	}
}
