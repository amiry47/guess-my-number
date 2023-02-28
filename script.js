'use strict';
// console.log(document.querySelector(".message").textContent);
// document.querySelector('.message').textContent = "🎉 Correct Number";
// document.querySelector('.number').textContent = 10;
// document.querySelector('.score').textContent= 15;
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);


let secretnumber = Math.trunc(Math.random()*21);
let score =20;
let highScore = 0;
// document.querySelector('.number').textContent=secretnumber;



document.querySelector('.check').addEventListener('click',
function(){
    const guess = Number(document.querySelector('.guess').value);

    
    // when Input is empty


    if (!guess){
        document.querySelector('.message').textContent = " 🤔 Enter a Guess Number";
    }


    //when Plyer Wins


    else if (guess === secretnumber){
        
        if (score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent= highScore;
        }

        document.querySelector('.message').textContent = "🎉 Correct Number";
        document.querySelector('.number').textContent=secretnumber;
        document.querySelector("body").style.backgroundColor="#60b347";
        document.querySelector('.number').style.width="30rem";

    }
    //    when guess is wrong
    else if (guess !== secretnumber){
        if (score > 1){
            document.querySelector('.message').textContent = guess < secretnumber ? "Too low  👇" : "Too High  👆" ; 
        score--;
        document.querySelector('.score').textContent= score; 
        }
        else{
            document.querySelector('.message').textContent = "GAME OVER 🎮"; 
            document.querySelector('.score').textContent= 0;
        }
        
    }
})


//     // when its too High

//     else if (guess > secretnumber){
//         if (score > 1){
//             document.querySelector('.message').textContent = "Too High 👆"; 
//         score--;
//         document.querySelector('.score').textContent= score; 
//         }
//         else{
//             document.querySelector('.message').textContent = "GAME OVER 🎮"; 
//             document.querySelector('.score').textContent= 0;
//         }
        
//     }

//     //  when its Too Low
//     else if (guess < secretnumber){
//         if (score >= 1){
//             document.querySelector('.message').textContent = "Too low  👇"; 
//             score--;
//             document.querySelector('.score').textContent= score;
//         }
//         else{
//             document.querySelector('.message').textContent = "GAME OVER 🎮"; 
//             document.querySelector('.score').textContent= 0; 
//         }
       
//     }
   
    
// }



document.querySelector(".again").addEventListener('click', function(){
    score =20;
    document.querySelector(".score").textContent=score;
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector('.number').style.width="15rem";
    document.querySelector('.number').textContent="?";
    document.querySelector('.message').textContent="Start guessing...";
    secretnumber = Math.trunc(Math.random()*21);
    document.querySelector('.guess').value="";
   
})

