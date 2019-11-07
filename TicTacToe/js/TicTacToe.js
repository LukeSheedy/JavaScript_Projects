// This function will get fired once the DOM is loaded.
// Disable the stop button since it is not needed until game start.
window.onload = function() {watch()} ;
function watch() {
    var btn= document.getElementById('btnStop');
    btnDisabled(btn); // disable the stop button since the game has not started
}

// this function will roll for random namburs twice, once for
//each player and determine which player won the roll.
function rollForTurn() {
    var xArray = [];
    var ranNum = '';
    var minimum = 1;
    var maximum = 11;
    var first = "";
    var txt1 = "";
    for (var i = 0; 1<2; i++) {
        // random whole number between 1 and 10
        ranNum = Math.floor(Math.random()*(maximum - minimum)+ minimum)
        xArray.push(ranNum);
    }
    }
    diceRoll(); // play dice sounds during the game roll for turn
    //build the string to show wchich player rolled what die role
    for (i=0;i<xArray.length;i++){
        var result = i + 1;
        var pOne = xArray[0];
        var pTwo = xArray[1];
        if (pOne == pTwo) { //  rigging roll on tie to aboid budg in code
            pOne = 1;
            pTwo = 2;
        }
        txt1 = "player 1 rolled ["+pOne+"]<br>";
        writeMsg(txt1);
        txt1 = txt1 + "Player 2 rolled ["+pTwo+"]<br><br>";
        setTimeout(function() {writeMsg(text1);} ,1000);//time delay for dramit affect

    }
    // determine and concatenate string showing which player won the roll
    if (pOne > pTwo) {
        first = "Player 1";
        setTimeout(function() {text1 = txt1 + "Player 1 wins, please choose a square.";}, 2000)
        setTimeout(function() {writeMsg(text1);}, 2000);
    } else if (pOne < pTwo) {
        first = "Player 2";
        setTimeout(function() {text1 = txt1 + "Player 2 wins, please choose a square.";}, 2000)
        setTimeout(function() {writeMsg(text1);}, 2000)
    }
    //pass which player won the roll
    return first;
}       

//-----------------------------------------------------------
// initation the game, roll for turn & determine the active player
//==============================================
function startGame() {
    var xTurn = 0;
    activePlayer = rollForTurn () ;
    if (activePlayer == "") {//if it was a tie , then reroll
        activePlayer = rollForTurn()
    }
    setTimeout(function() {hideGameMsg();},4000)

    //assign proper state of the control buttons
    var btn = document.getElementById('btnStart');
    btnDisabled(btn); // disable the start button since the game is now afoot
    var btn= document.getElementById('btnStop');
    btnEnabled(btn); // disable the start button since the game is now afoot)

    //Assign the active player to the console
    var showPlayer = document.getElementById('ShowPlayer')
    showPlayer.innerHTML = activePlayer;
    showPlayer.style.color = "green";
}

// this function styles the game buttons while they are disabled
function btnDisabled(btn) {
    btn.style.color= "fff";
    btn.style.border= "2px solid rgb(153,153,102)";
    btn.style.backgroundColor ="rgb (214,214,194)";
    btn.disabled = true ;
}

// this funtion styles the game buttons while they are disabled
function stopEnabled (btn) {
    btn.style.color= "fff";
    btn.style.border= "2px solid rgb(204,0,0)";
    btn.style.backgroundColor ="rgb (255,51,51)";
    btn.disabled = false;
}

//this function styles the game buttons while they are disabled
function startEnabled (btn) {
    btn.style.color= "fff";
    btn.style.border= "2px solid rgb(0,153,0)";
    btn.style.backgroundColor ="rgb (57,230,0)";
    btn.disabled = false;
}

// when the user indicates, stop the current game and reset game
function stopGame(){
    hideGameMsg();//clear the text and hide message box
    var btn= document.getElementById('btnStart');
    startEnabled(btn);//enale the start button since the game is now stoped
    var btn = document.getElementById('btnStop');
    btnDisabled(btn); // disable the stop button since the game is now stopped
    var showPlayer = document.getElementById('showPlayer')
    showPlayer.innerHTML = "Game Stopped";
    showPlayer.style.color= 'red';

    //reset all squares to thier starting empty state.
    var arrayO = document.getElementsByClassName("O")
    var arrayX = document.getElementsByClassName("X");
    for (var i=0; i<arrayO.length;i++){
        arrayO[i].style.transform = "translateY(-100%)";
    }
    for (var i=0; i<arrayX.length;i++){
        arrayX[i].style.transform = "translateY(100%)";
    }
    //this clears the running log of all game moves
    document.getElementById('boardState').innerHTML= "";
}

// this function will show the message console and any text it may have
function showGameMsg() {
    document.getElementById('gameMsgBox').style.display = 'block';
}

// this function will conceal the message console from view
function hideGameMsg() {
    clearMsg() // claer the text from the mesage console
    document.getElementById('gameMsgBox').style.display = 'none'; //hide the div
}

// this function will write text to the game messsage console
function writeMsg(txt) {
    showGameMsg();
    document.getElementById('gameMsg').innerHTML = txt;
}

// this function will clear the text from the message console
function clearMsg () {
    document.getElementById('gameMsg').innerHTML = "";
}

// this function is for the player configuration panel and checks the
//prosed avatar assignments and prevets them from being the same.
function saveSettings(){
    var p1Index = document.getElementById("player1").selectedIndex;
    var p1Selected= document.getElementById("player1").options;
    var p2Index = document.getElementById("player2").selectedIndex;
    var p2Selected= document.getElementById("player2").options;
    if (p1Selected [p1Index].text == p2Selected[p2Index].text) {
        alert("Error- Player 1 and 2 connot both be assigned as: "+p1Selected[p1Index].text)
    } else {
        document.getElementById('p1Display').innerHTML= p1Selected[p1Index].text;
        document.getElementById('p2Display').innerHTML= p1Selected[p2Index].text;
    }
}

//this function returns's the currently assinged avatar for each player
function getAvatars(){
    var p1Avatar = document.getElementById("p1Display").innerHTML;
    var p2Avatar = document.getElementById("p2Display").innerHTML;
    var avatarArray = [p1Avatar,p2Avatar]
    return avatarArray;
}

// this function will return the active player's avatar
function determineAvatar() {
    //determine the correct avatar to paint for the active player
    var avatarArray = getAvatars (); // returns an array of both player's assinged avatars
    var active = document.getElementById('showPlayer').innerHTML;//get active player
    p1Avatar = avatarArray[0];
    p1Avatar = avatarArray[1];
    if (activ == "Player 1") { // check which player is ative and thier correspoding avatar
        var paintAvatar = p1Avatar;
    } else if (acitve == "Player 2") {
        var paintAvatar = p2Avatar;
    }
    return paintAvatar;// returned back the correct avatar
}

// this function changes active player over to the other player
function avatarPlaced() {
    var parseText = doc.getAvatars('gameMsg').innerHTML;
    var showPlayer = document.getElementById('showPlayer'); // select the current element to memory
    // check if there is alerday a winner...if there is, then dont continue the game
    if (parseText == "That's three in a row, Player 1  wins" || parseText=="That's three in a row, Player 2 wins!") {
        showPlayer.innerHTML = "Game Stopped";
        showPlayer.style.color='red';
    }
    activePlayer = showPlayer.innerHTML;// get the current player from the element
    if (activePlayer == "Player 1") {// once active player selects a square change the active player
        showPlayer.innerHTML = "Player 2";
    } else {
        showPlayer.innerHTML = "Player 1";
    }
    check4Tie(); // call this function to inquire if there was a cat's game.
}

// this function will get the array of the current board
// and check the proposed move for a validity
function check(info,square) {
    for (var i in info) {
        var tempInfo = info[i].charAt(0);//compaing index of square
        if(tempInfo == square) {
            return tempInfo;
        }
    }
}

// as squares are selected they ckeck in with this function to see if that particular
//square has already been assinged and if it has not, record new square with the assinged avatar
function recordMoves(square) {
    var proposedMove = square;
    var boardState = document.getElementById('boardState').innerHTML;// returieve boardState array
    var info = boardState.split (','); //separate the string by commas to create an array
    verdict = check()
}


// this function will get list of previous moves
// and then concatenate the current move to it.
function recordMove(currentMove) {
    var target = document.getElementById('boardState');
    var previousMoves = target.innerHTML ;
    target.innerHTML = previousMoves+currentMove;
}

function checkForWinCon () {
    var squareArray = [];
    var target = document.getElementById('boardState');
    var info = target.innerHTML;//raw array with squares and avatarts
    info = info.substring(1);//remove leading comma
    info = info.split(',');//separate the string by commas into an array
    info.sort();//sort the square array in order despite the acctual gameplay sequence
    for (var i in info) {
        squareArray.push(info[i].charAt(0));//new array with only squares not avatarts
    }
    // call this following array of unction to check for any of the possible win cons
    checkForWinCon1(info,squareArray);
    checkForWinCon2(info,squareArray);
    checkForWinCon3(info,squareArray);
    checkForWinCon4(info,squareArray);
    checkForWinCon5(info,squareArray);
    checkForWinCon6(info,squareArray);
    checkForWinCon7(info,squareArray);
    checkForWinCon8(info,squareArray);
    // console.log('New CHECK: "+document.getElementByID('gameMsg').innerHTML);
    check4Tie();
}

// call this function to check board state for any ties and act accordingly
function check4Tie() {
    var boardState = document.getElementById('boardState').innerHTML;
    boardState = boardState.substring(1);// remove leading comma
    boardState = boardState.split(',');//separate the string by commas into an array
    var check= document.getElementById("gameMsg").innerHTML;
    if (boardState.length >= 9 && check!= "That's three in a row, Player 1 wins!" && check != "That's three in a row, Player 2 wins!") {
        var txt1 = "oh no! Nobody wins, it was a tie!";
        tieSound(); // play a sound when a tie as been dected
        writeMsg(txt1);
        setTimeout(function() {steopGame();},3000)
    }
}

//whenever a win is dected the correspoding cuntion will
// call this function to product the following winning process for the game
function winner (winDetected,winCon){
    if (winDetected == "win") {
        var showme= winDetected;
        var activePlayer= document.getElementById('showPlayer').innerHTML;
        var txt2 = "That's threee in a row," +activePlayer+ "wins!";
        writeMsg(txt2)
        var btn= document.getElementById('btnStart');
        startEnabled(btn); //enalbe the start button since the game is now stopped
        var btn= document.getElementById('btnStop');
        btnDisabled(btn);//disable the stop button since the game is now stopped
        document.getElementById('showPlayer').innerHTML = "Game Stopped";
        glowBoard(winCon);//call funtion to make the gamboard pusle with colors
    }
}

// this function will make the winning squares light up in celebreation
function glowBoard(pos) {
    var index0 = pos[0];
    var index1 = pos[1];
    var index2 = pos[2];
    var squares = document.getElementsByClassName('square')
    for (var i=0; i<squares.length;i++) {
        if (i == index0) {
            var bg1 = squares[i];
            blink();
            winSound();
            setTimeout(function() {bg1.style.backgroundColor= "rgb(244, 179, 66)";}, 100);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(244, 238, 66)";}, 200);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(197, 244, 66)";}, 300);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(122, 179, 66)";}, 400);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(66, 244, 235)";}, 500);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(244, 179, 66)";}, 600);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(244, 179, 66)";}, 700);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(197, 244, 66)";}, 800);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(122, 179, 66)";}, 900);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(66, 244, 235)";}, 1000);
            setTimeout(function() {bg1.style.backgroundColor= '#d7f3f7';}, 1100);
        } else if (i == index1) {
            var bg2 = squares[i];
            setTimeout(function() {bg1.style.backgroundColor= "rgb(66, 244, 235)";}, 100);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(122, 179, 66)";}, 200);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(197, 244, 66)";}, 300);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(244, 179, 66)";}, 400);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(244, 179, 66)";}, 500);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(66, 244, 235)";}, 600);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(122, 179, 66)";}, 700);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(197, 244, 66)";}, 800);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(244, 179, 66)";}, 900);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(244, 179, 66)";}, 1000);
            setTimeout(function() {bg1.style.backgroundColor= '#d7f3f7';}, 1100);
        } else if (i == index2) {
            var bg3= squares[i];
            setTimeout(function() {bg1.style.backgroundColor= "rgb(244, 179, 66)";}, 100);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(244, 238, 66)";}, 200);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(197, 244, 66)";}, 300);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(122, 179, 66)";}, 400);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(66, 244, 235)";}, 500);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(244, 179, 66)";}, 600);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(244, 179, 66)";}, 700);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(197, 244, 66)";}, 800);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(122, 179, 66)";}, 900);
            setTimeout(function() {bg1.style.backgroundColor= "rgb(66, 244, 235)";}, 1000);
            setTimeout(function() {bg1.style.backgroundColor= '#d7f3f7';}, 1100);
        }
    }
}


// these functions will produce game sounds depeding of the occasion
function squareSound() {
    var sound= document.getElementById("placeAvatar");
    sound.play();
    setTimeout(function() {sound.onpause();}, 400)// add delay to these to keep sound short
    setTimeout(function() {sound.currentTime = 0;}, 500);
}
function tieSound() {
        var sound = document.getElementById("tieGame");
        var check= document.getElementById('gameMsg').innerHTML;
        setTimeout(function() {sound.play();},500);
}
function winSound() {
    var sound = document.getElementById("winGame");
    setTimeout(function() {sound.play();}, 500);
    setTimeout(function() {sound.onpause();}, 2700);// add delay to these to keep sound short
    setTimeout(function() {sound.currentTime = 0;}, 2800);
}
function diceRoll () {
    var sound = document.getElementById("diceRoll");
    sound.play();
}

// call this function to make entire background color 
//flash for a few seconds for a win animation
function blink() {
    var body = document.getElementById('body');
    setTimeout(function() {body.style.backgroundColor= '#94f7ed'}, 100);
    setTimeout(function() {body.style.backgroundColor= '#94cef7'}, 200);
    setTimeout(function() {body.style.backgroundColor= '#94a6f7'}, 300);
    setTimeout(function() {body.style.backgroundColor= '#b094f7'}, 400);
    setTimeout(function() {body.style.backgroundColor= '#cc94f7'}, 500);
    setTimeout(function() {body.style.backgroundColor= '#e894f7'}, 600);
    setTimeout(function() {body.style.backgroundColor= '#f794d9'}, 700);
    setTimeout(function() {body.style.backgroundColor= '#f73881'}, 800);
    setTimeout(function() {body.style.backgroundColor= '#c6034e'}, 900);
    setTimeout(function() {body.style.backgroundColor= '#e00202'}, 1000);
    setTimeout(function() {body.style.backgroundColor= '#ffffff'}, 1100);
}


//------------------------------------------------------
// these function are the algorithms to find all win conditions
//--------------------------------------------------------
//checking for wincon squares 012
function checkForWinCon1(info,squareArray) {
    var winDetected = "on";
    var winCon1 = [0,1,2]
    //iterae through the growing array during gametime 
    //searching for existince
    //of index 0, index 1 and index 2 and once they
    // do apper in the array, record thier avatars 
    //and compare all 3 for win
    for (var i in info) {
        if (info[i].charAt(0) == "0"){
            var match0Avatar = info[i].charAt(1);// only interested in recored in the avater
        }
        if (info[i].charAt(0) == "1"){
            var match1Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "2"){
            var match2Avatar = info[i].charAt(1);
        }
    }
    // this will trigger (ONLY) if there was a match for index0, index1, and index2
    if (match0Avatar!= undefined && match1Avatar != undefined && match2Avatar != undefined) {
        if (match0Avatar == match1Avatar && match0Avatar== match2Avatar) {
            winDetected = "win"; // this flag will pass when a win has een detected
            winner(winDetected,winCon1);
            return;
        }
    }
    winner(winDetected,winCon1);//wincon1 is the array of win combo
}
//checking for wincon squares 345
function checkForWinCon2(info,squareArray) {
    var winDetected = "on";
    var winCon2 = [3,4,5]
    for (var i in info) {
        if (info[i].charAt(0) == "3"){
            var match3Avatar = info[i].charAt(1);// only interested in recored in the avater
        }
        if (info[i].charAt(0) == "4"){
            var match4Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "5"){
            var match5Avatar = info[i].charAt(1);
        }
    }
    if (match3Avatar!= undefined && match4Avatar != undefined && match5Avatar != undefined) {
        if (match3Avatar == match4Avatar && match3Avatar== match5Avatar) {
            winDetected = "win"; // this flag will pass when a win has een detected
            winner(winDetected,winCon2);
            return;
        }
    }
    winner(winDetected,winCon2);
//
function checkForWinCon3(info,squareArray) {
    var winDetected = "on";
    var winCon3 = [6,7,8]
    for (var i in info) {
        if (info[i].charAt(0) == "6"){
            var match6Avatar = info[i].charAt(1);// only interested in recored in the avater
        }
        if (info[i].charAt(0) == "7"){
            var match7Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "8"){
            var match8Avatar = info[i].charAt(1);
        }
    }
    if (match6Avatar!= undefined && match7Avatar != undefined && match8Avatar != undefined) {
        if (match6Avatar == match7Avatar && match6Avatar== match8Avatar) {
            winDetected = "win"; // this flag will pass when a win has een detected
            winner(winDetected,winCon3);
            return;
        }
    }
    winner(winDetected,winCon3);//wincon2 is the array of win combo
}
//checking for wincon squares
function checkForWinCon1(info,squareArray) {
    var winDetected = "on";
    var winCon4 = [0,3,6]
    for (var i in info) {
        if (info[i].charAt(0) == "0"){
            var match0Avatar = info[i].charAt(1);// only interested in recored in the avater
        }
        if (info[i].charAt(0) == "3"){
            var match3Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "6"){
            var match6Avatar = info[i].charAt(1);
        }
    }
    if (match0Avatar!= undefined && match3Avatar != undefined && match6Avatar != undefined) {
        if (match0Avatar == match3Avatar && match0Avatar== match6Avatar) {
            winDetected = "win"; // this flag will pass when a win has een detected
            winner(winDetected,winCon4);
            return;
        }
    }
    winner(winDetected,winCon4);//wincon2 is the array of win combo
}
//checking for wincon squares 147
function checkForWinCon1(info,squareArray) {
    var winDetected = "on";
    var winCon5 = [1,4,7]
    for (var i in info) {
        if (info[i].charAt(0) == "1"){
            var match1Avatar = info[i].charAt(1);// only interested in recored in the avater
        }
        if (info[i].charAt(0) == "4"){
            var match4Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "7"){
            var match7Avatar = info[i].charAt(1);
        }
    }
    if (match1Avatar!= undefined && match4Avatar != undefined && match7Avatar != undefined) {
        if (match1Avatar == match4Avatar && match1Avatar== match7Avatar) {
            winDetected = "win"; // this flag will pass when a win has een detected
            winner(winDetected,winCon5);
            return;
        }
    }
    winner(winDetected,winCon5);//wincon2 is the array of win combo
}


//checking for wincon squares 258
function checkForWinCon1(info,squareArray) {
    var winDetected = "on";
    var winCon6 = [2,5,8]
    for (var i in info) {
        if (info[i].charAt(0) == "2"){
            var match2Avatar = info[i].charAt(1);// only interested in recored in the avater
        }
        if (info[i].charAt(0) == "5"){
            var match5Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "8"){
            var match8Avatar = info[i].charAt(1);
        }
    }
    // this will trigger (ONLY) if there was a match for index0, index1, and index2
    if (match2Avatar!= undefined && match5Avatar != undefined && match8Avatar != undefined) {
        if (match2Avatar == match5Avatar && match2Avatar== match8Avatar) {
            winDetected = "win"; // this flag will pass when a win has een detected
            winner(winDetected,winCon6);
            return;
        }
    }
    winner(winDetected,winCon6);//wincon2 is the array of win combo
}
//checking for wincon squares 642
function checkForWinCon(info,squareArray) {
    var winDetected = "on";
    var winCon7 = [6,4,2]
    for (var i in info) {
        if (info[i].charAt(0) == "6"){
            var match6Avatar = info[i].charAt(1);// only interested in recored in the avater
        }
        if (info[i].charAt(0) == "4"){
            var match4Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "2"){
            var match2Avatar = info[i].charAt(1);
        }
    }
    // this will trigger (ONLY) if there was a match for index0, index1, and index2
    if (match6Avatar!= undefined && match4Avatar != undefined && match2Avatar != undefined) {
        if (match6Avatar == match4Avatar && match6Avatar== match2Avatar) {
            winDetected = "win"; // this flag will pass when a win has een detected
            winner(winDetected,winCon7);
            return;
        }
    }
    winner(winDetected,winCon7);
}

//checking for wincon squares 642
function checkForWinCon(info,squareArray) {
    var winDetected = "on";
    var winCon8 = [6,4,2]
    for (var i in info) {
        if (info[i].charAt(0) == "8"){
            var match0Avatar = info[i].charAt(1);// only interested in recored in the avater
        }
        if (info[i].charAt(0) == "4"){
            var match4Avatar = info[i].charAt(1);
        }
        if (info[i].charAt(0) == "0"){
            var match8Avatar = info[i].charAt(1);
        }
    }
    // this will trigger (ONLY) if there was a match for index0, index1, and index2
    if (match8Avatar!= undefined && match4Avatar != undefined && match0Avatar != undefined) {
        if (match8Avatar == match4Avatar && match8Avatar== match0Avatar) {
            winDetected = "win"; // this flag will pass when a win has een detected
            winner(winDetected,winCon8);
            return;
        }
    }
    winner(winDetected,winCon8);
}
//-----------------------------------------------------------
// These block of function are for each click event of their corresponding square element
//-------------------------------------------------------------
function square1Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") {// if game has not yet started preven avatar placement
        var square = "0";//identify the square selected
        //check if the proposed square is valid
        var verdict = recordMoves(square);
        if(verdict == undefined) {// if verdict is empty than the square is unoccupied.
            var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[0];//paint avatar
            if (paintAvatar == "O") {// change these all to tereay statements instead
                animateO(selected);//call function to animate O
            } else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," +square+paintAvatar;
            recordMoves (currentMove);
            checkForWinCon(); // call function to check if current move completes a winning condition.
            squareSound();//play a game sound when the avatar is placed
        }
    }
}

function square2Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") {// if game has not yet started preven avatar placement
        var square = "1";//identify the square selected
        //check if the proposed square is valid
        var verdict = recordMoves(square);
        if(verdict == undefined) {// if verdict is empty than the square is unoccupied.
            var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[0];//paint avatar
            if (paintAvatar == "O") {// change these all to tereay statements instead
                animateO(selected);//call function to animate O
            } else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," +square+paintAvatar;
            recordMoves (currentMove);
            checkForWinCon(); // call function to check if current move completes a winning condition.
            squareSound();//play a game sound when the avatar is placed
        }
    }
}

function square3Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") {// if game has not yet started preven avatar placement
        var square = "2";//identify the square selected
        //check if the proposed square is valid
        var verdict = recordMoves(square);
        if(verdict == undefined) {// if verdict is empty than the square is unoccupied.
            var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[0];//paint avatar
            if (paintAvatar == "O") {// change these all to tereay statements instead
                animateO(selected);//call function to animate O
            } else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," +square+paintAvatar;
            recordMoves (currentMove);
            checkForWinCon(); // call function to check if current move completes a winning condition.
            squareSound();//play a game sound when the avatar is placed
        }
    }
}

function square4Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") {// if game has not yet started preven avatar placement
        var square = "3";//identify the square selected
        //check if the proposed square is valid
        var verdict = recordMoves(square);
        if(verdict == undefined) {// if verdict is empty than the square is unoccupied.
            var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[0];//paint avatar
            if (paintAvatar == "O") {// change these all to tereay statements instead
                animateO(selected);//call function to animate O
            } else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," +square+paintAvatar;
            recordMoves (currentMove);
            checkForWinCon(); // call function to check if current move completes a winning condition.
            squareSound();//play a game sound when the avatar is placed
        }
    }
}

function square5Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") {// if game has not yet started preven avatar placement
        var square = "4";//identify the square selected
        //check if the proposed square is valid
        var verdict = recordMoves(square);
        if(verdict == undefined) {// if verdict is empty than the square is unoccupied.
            var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[0];//paint avatar
            if (paintAvatar == "O") {// change these all to tereay statements instead
                animateO(selected);//call function to animate O
            } else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," +square+paintAvatar;
            recordMoves (currentMove);
            checkForWinCon(); // call function to check if current move completes a winning condition.
            squareSound();//play a game sound when the avatar is placed
        }
    }
}

function square6Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") {// if game has not yet started preven avatar placement
        var square = "5";//identify the square selected
        //check if the proposed square is valid
        var verdict = recordMoves(square);
        if(verdict == undefined) {// if verdict is empty than the square is unoccupied.
            var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[0];//paint avatar
            if (paintAvatar == "O") {// change these all to tereay statements instead
                animateO(selected);//call function to animate O
            } else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," +square+paintAvatar;
            recordMoves (currentMove);
            checkForWinCon(); // call function to check if current move completes a winning condition.
            squareSound();//play a game sound when the avatar is placed
        }
    }
}

function square7Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") {// if game has not yet started preven avatar placement
        var square = "6";//identify the square selected
        //check if the proposed square is valid
        var verdict = recordMoves(square);
        if(verdict == undefined) {// if verdict is empty than the square is unoccupied.
            var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[0];//paint avatar
            if (paintAvatar == "O") {// change these all to tereay statements instead
                animateO(selected);//call function to animate O
            } else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," +square+paintAvatar;
            recordMoves (currentMove);
            checkForWinCon(); // call function to check if current move completes a winning condition.
            squareSound();//play a game sound when the avatar is placed
        }
    }
}

function square8Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") {// if game has not yet started preven avatar placement
        var square = "7";//identify the square selected
        //check if the proposed square is valid
        var verdict = recordMoves(square);
        if(verdict == undefined) {// if verdict is empty than the square is unoccupied.
            var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[0];//paint avatar
            if (paintAvatar == "O") {// change these all to tereay statements instead
                animateO(selected);//call function to animate O
            } else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," +square+paintAvatar;
            recordMoves (currentMove);
            checkForWinCon(); // call function to check if current move completes a winning condition.
            squareSound();//play a game sound when the avatar is placed
        }
    }
}

function square9Animate() {
    var activePlayer = document.getElementById('showPlayer').innerHTML;
    if (activePlayer != "Game Stopped") {// if game has not yet started preven avatar placement
        var square = "8";//identify the square selected
        //check if the proposed square is valid
        var verdict = recordMoves(square);
        if(verdict == undefined) {// if verdict is empty than the square is unoccupied.
            var paintAvatar = determineAvatar(); // get the correct avatar to paint for the active player
            var selected = document.getElementsByClassName(paintAvatar)[0];//paint avatar
            if (paintAvatar == "O") {// change these all to tereay statements instead
                animateO(selected);//call function to animate O
            } else if (paintAvatar == "X") {
                animateX(selected); // call function to animate X
            }
            //build new array adding the newly selected square and the assigned avatar
            var currentMove = "," +square+paintAvatar;
            recordMoves (currentMove);
            checkForWinCon(); // call function to check if current move completes a winning condition.
            squareSound();//play a game sound when the avatar is placed
        }
    }
}

// this function will perform the animtion for the O avatar.
function animateO(selected){
    selected.style.transform = (selected.style.transform == "translateY(-100%)"||null) ? "translateY(O)" : "translateY(-100%)";
}

// this function will perform the animtion for the X avatar.
function animateX(selected){
    selected.style.transform = (selected.style.transform == "translateY(-100%)"||null) ? "translateY(O)" : "translateY(100%)";
}

