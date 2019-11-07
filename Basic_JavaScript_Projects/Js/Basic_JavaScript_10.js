function Call_Loop(){
	var Digit = "";
	var X = 1;
	while (X < 25) {
		Digit += "<br>" + X;
		X++;
	}
	document.getElementById("Loop").innerHTML = Digit;
}

function myString() {
    var str = "This is a String.";
    var n = str.length;
    document.getElementById("String").innerHTML = n;
}

var Truck = ["Horns","Lights","Chrome","Cattle Gaurd","Mud Flaps","Grease","Diesel"];
var Content ="";
var Y;
function for_Loop() {
    for (Y = 0; Y< Truck.length; Y++){
    Content += Truck[Y] + "<br>";
    }
    document.getElementById("List_of_Diesel").innerHTML = Content;
}

function dog_pics() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "growling";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is "+Dog_Picture[1]+".";
}

function Constant_fun() {
    const Semi_Parts = {type:"Steer", brand:"KKS", style:"Generic"};
    Semi_Parts.style = "Long Hauler";
    Semi_Parts.price = "399";
    document.getElementById("Constant").innerHTML= "The cost of the "+Semi_Parts.type+" Tire was depending on brand, the brand "+Semi_Parts.brand+ " are the reliable but cost " +Semi_Parts.price+ ", but so are the " +Semi_Parts.style+ " because of there low profile."; 
}


var X = 100;
document.write(X);
{
	let X =25;
	document.write("<br>" + X);
}
document.write("<br>" + X);

var x = myFunction(257, 7); 
function myFunction(a, b) {
  return a * b; 
}
document.write("<br>" +x);


function getCar() {
    
    let Truck= {
        make: "Peterbilt ",
        model: "386 ",
        year: "2013 ",
        color: "White ",
        description:function() {
        return "The Semi truck is a "+ this.year + this.color + this.make +this.model;
        }  

    }
    document.getElementById("Truck_Object").innerHTML= Truck.description();
} 

function Breaking(){
    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
    if (i === 5) { break; }
    text += "This is " + i + "<br>";
    }
    document.getElementById("Break").innerHTML = text;
}

function Continue() {// FOR STEP 201!!
    var text = "";
    var i;
    for (i = 0; i < 6; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
    }
    document.getElementById("Continue").innerHTML = text;
}
