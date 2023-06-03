'use strict';
let playing = true;
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random()*20 +1);


const displayMessage = function (message){
    document.querySelector(".message").textContent = message;
}

const checking = function () {
    if (playing){
     const guess =Number (document.querySelector(".guess").value);

    if (!guess){
        displayMessage("Please Input a Number ⛔");
    }
    
    else if (secretNumber === guess){
        playing = false;
        displayMessage(" 🏆 Correct Number ");
        document.querySelector(".number").textContent = secretNumber; 
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore ;
        }

    }

    else if (secretNumber !== guess){
       
        if (score > 0 ){
            document.querySelector(".message").textContent = guess > secretNumber ? " TOO! HIGH 💹 " : " TOO! LOW 📈 ";
            score --;
            document.querySelector(".score").textContent = score;}
            else{
                document.querySelector(".message").textContent = " Game Over 😢 ";
            }

    }
}

};


document.addEventListener("keydown", function (e){
    if (e.key === "Enter"){
        checking();
    }
    
});


document.querySelector(".check").addEventListener("click", checking);

document.querySelector(".again").addEventListener("click", function(){
    document.querySelector(".message").textContent = " Start Guessing ";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?"; 
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".score").textContent = score =20 ;
    secretNumber = Math.trunc(Math.random()*20 +1);
    document.querySelector(".guess").value = null;
    playing = true;
    });