function my_Dictionary() {
	var Animal= {
	Species:"Dog",
	Color:"Black",
	Breed:"Labrador",
	Age:5,
    Sound:"Bark!"
    };
    delete Animal.Sound;
	document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_Dictionary2() {
	var Animal2= {
	Species:"Dog",
	Color:"Black",
	Breed:"Labrador",
	Age:5,
    Sound:"Bark!"
    };
	document.getElementById("Dictionary2").innerHTML = Animal2.Sound;
}
