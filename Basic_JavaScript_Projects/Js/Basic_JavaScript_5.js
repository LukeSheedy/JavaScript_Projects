document.write(typeof "Word");
document.write(typeof 3);
document.write(2E310);
document.write(-3E310);
document.write(10>2);
document.write(10<2);
document.write("10"+5)
document.write(10 == 10);
document.write(3 == 11);
document.write(5 > 10 && 10 > 40);
document.write(5 > 3 && 10 > 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10> 20);

document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");



B = 12;
B = 12;
document.write(B === B) /*True*/

X = 10;
Y = 10;
document.write(X === Y)/*True*/

E = 12;
F = "13";
document.write(E === F)/*false*/

C = "82";
G = "81";
document.write(C === G)/*false*/

A = 10;
C = 12;
document.write(A === C)/*false*/




console.log(10<2)
console.log(2+2);

function my_Function2() {
	document.getElementById("Test2").innerHTML = 0/0;
}

function my_Function3() {
    var res= isNaN('This is a string');
	document.getElementById("Test3").innerHTML = res;
}

function my_Function4() {
    var rep= isNaN("007");
	document.getElementById("Test4").innerHTML = rep;
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(20 > 10);
}

function Ride_Function() {
	var Height, Can_ride;
	Height = document.getElementById("Height").value;
	Can_ride = (Height < 52) ? "You are too short ":"You are tall enough ";
	document.getElementById("Ride").innerHTML= Can_ride + "to ride.";
}