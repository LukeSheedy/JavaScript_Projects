function my_Sentence(){
    var part_1 ="I have currently";
	var part_2 = "made this into";
	var part_3 = " a complete huge";
	var part_4 = " massive sentence.";
	var whole_sentence = part_1.concat(part_2,part_3,part_4);
	document.getElementById("sentence").innderHTML = whole_sentence ;
}
