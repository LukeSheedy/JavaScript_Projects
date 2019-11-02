function mySentence() {
    var part_1 =["I have currently"];
	var part_2 = ["made this into"];
	var part_3 = [" a complete huge"];
	var part_4 = [" massive sentence."];
	var whole_sentence = part_1.concat(part_2,part_3,part_4);
	document.getElementById("sentence").innerHTML = whole_sentence ;
}

function slice_Method() {
	var Sentence= "All work and no play makes Luke a dull boy.";
	var Section = Sentence.slice(27,31);
	document.getElementById("Slice").innerHTML = Section;
}

function Upper_case(){
    var Case = "Life is like a Box of Chocolates.";
    var CaseUp = Case.toUpperCase()
    document.getElementById("Upper").innerHTML = CaseUp;
}

function Searching() {
    var string = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaatheaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"; 
    var result = string.search("the");
    document.getElementById("Search").innerHTML = result;
  }

  function string_Method() {
	var Y = 182000;
	document.getElementById("Numbers").innerHTML = Y.toString();
}


function precision_Method() {
	var Y = 182000.645647984694;
	document.getElementById("Precision").innerHTML = Y.toPrecision();
}

function toFixed_method(){
    var Y =5.3648547;
    document.getElementById("Fix").innerHTML = Y.toFixed(3)
}

function value_method (){
    var H = "Return Orignal value"
    var R = H.valueOf();
    document.getElementById("Value").innerHTML = R;
}
