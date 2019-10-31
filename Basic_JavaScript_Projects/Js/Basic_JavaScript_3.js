window.alert(Math.random())+("hi");
window.alert(Math.random()*1000);


function additionFunction(){
	var addition= 2+2;
	document.getElementById("Math").innerHTML= "2 + 2 = " + addition;
}


function subtractionFunction() {
	var Subtraction= 5 - 2;
	document.getElementById("Minus").innerHTML= "5 - 2 =" + Subtraction;
}

function division() {
	var simple_math= 1200 / 6 ;
	document.getElementById("Divid").innerHTML= " 1200 / 6 = "+simple_math;
}

function multiplication() {
	var simple_math2= 6* 89;
	document.getElementById("Multiply").innerHTML= " 6 x 89 = "+simple_math2;
}

function more_math () {
    var Sums= (4+3) * 9 /2 +2;
    document.getElementById("Formula").innerHTML= "4 plus 3, multiplied by 9, divided in half and then added by 2 equals= " +Sums;
}

function negation() {
	var x= 10 ;
	document.getElementById("Negative").innerHTML= -x;
}


function incerementFunction(){
    var Y = 5;
    Y++;
    document.getElementById("Increse").innerHTML= Y;
}

function decrementFunction() {
    var X = 5.25;
    X--;
    document.getElementById("Decrese").innerHTML= X;
}

function mySquare() {

    document.getElementById("Step84").innerHTML= Math.sqrt(100);
}