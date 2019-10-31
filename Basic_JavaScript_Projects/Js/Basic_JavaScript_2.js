function myFirstFunction() {
    var str= "This text is Red";
    var str= str.bold();
    var str= str.italics();
    var result = str.fontcolor("red"); 
    document.getElementById("Red_Text").innerHTML=result;
}


function myFunction() {
        var sentence= "I am learning ";
        sentence += "a lot from this book!";
        document.getElementById("Step62").innerHTML = sentence;
}