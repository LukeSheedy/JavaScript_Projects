window.alert("This is wokring");

var A ='Hello, world its fun to learn!';
document.write(A);


document.write("Pie Pie barked at Stella, \"Hey you!\" Stella replied,\"yes?!\" then went on.")


var B ="String varable"
window.alert(B);

var C = ("\"Keep Hustling until you cant,"
+ " because those who don\'t despise you, only you need believe in yourself.\""
+ "-?"); 
document.write(C);



var Family="The Sheedys", Dad="Luke", Mom= "Jade",
	Daughter="Stella", Daughter2="Shyshy";

var Dad = "Luke";
var Dad = Dad.fontcolor("blue");

var Mom="Jade";
var Mom= Mom.fontcolor("red");

var Daughter="Stella";
var Daughter= Daughter.fontcolor("green");

var Daughter2="Shyshy";
var Daughter2= Daughter2.fontcolor("grey");

document.write(Dad + Mom + Daughter + Daughter2);

document.write(9+54);




function myFirstFunction() {
	var str = "This text is green";
	var result = str.fontcolor("green");
	document.getElementById("Green_Text").innerHTML = result;
}