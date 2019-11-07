//main attraction submit animal
function Animal_Function ()  {
    var Animal_Output;
    var Animals = document.getElementById("Animal_Input").value;
    var Animal_String = " is a great animal!";
    switch (Animals) {
        case "Dog":
            Animal_Output = "Dog" + Animal_String;
        break;
        case "Pig":
            Animal_Output = "Pig" + Animal_String;
        break;
        case "Goat":
            Animal_Output = "Goat" + Animal_String;
        break;
        case "Groundhog":
            Animal_Output = "Groundhog" + Animal_String;
        break;
        case "Bear":
            Animal_Output = "Bear" + Animal_String;
        break;
        case "Penguin":
            Animal_Output = "Penguin" + Animal_String;
        break;
        default:
         Animal_Output = "Please enter a animal exactly as writen on the above list.";
    }
    document.getElementById("Output").innerHTML=Animal_Output;

}
//changes header text
function Hello_World_Function()	{
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}

function step215(){
    var c = document.getElementById("ID_Name");
    var ctx = c.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("Hello World",10,50);
    
    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "red");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 100, 150, 100);


}