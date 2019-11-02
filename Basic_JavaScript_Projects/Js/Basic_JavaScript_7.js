
X =10 /* This is the global variable*/

function Add_numbers_1 () {
    var X =10;
	document.write(20 + X );
}
function Add_numbers_2() {
    var X= 10;
	document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();


function Add_numbers_3 () {
	var X = 20;
	document.write(20 + X );
}
function Add_numbers_4() {
    var X = 20
	document.write(X + 100);
}
Add_numbers_3();
Add_numbers_4();


function Add_numbers_5() {
	var X = 10;
	console.log(15 + X);
}
function Add_numbers_6() {
    var X =20 /*added X here to finish off the bug in the code instead of using the global variable*/
	console.log(X + 100);
}
Add_numbers_5();
Add_numbers_6();

/*step 130 ran error in Chrome Dev then fixed and noted*/

function get_Date(){ /*step 133 */
	if (new Date().getHours()<20){
	document.getElementById("Time").innerHTML = "Have a goodnight!";
    }
}

function myNumber(){
    if ( 1 < 2) {
	document.write("the left number is smaller than the right.")
    }
}


function GuessFunction(){  /* this is for step 136? */
    Guess = document.getElementById("Guessing").value;
    if (Guess >= 5) {
        Answer = "Thats the winning number!"
    }
    else {
        Answer = "Your getting closer to the winning number!"
    }
    document.getElementById("Winorlose").innerHTML = Answer;
}

function Time_function(){ /* For step 138*/
	var Time = new Date().getHours();
	var Reply;
	if (Time < 12 == Time > 0 ) {
		Reply= "It is morning time!";
	}
	else if (Time > 12 == Time < 18) {
		Reply= "It is the afternoon.";
	}
	else {
		Reply = "It is eveing time.";
	}
    document.getElementById("Time_of_day").innerHTML= Reply;
}


function myNumber(){
    if ( 1 < 2) {
	document.write("the left number is smaller than the right.")
    }
}