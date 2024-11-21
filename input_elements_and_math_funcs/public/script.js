//userInput
//gameResult
let inputElemnt=document.getElementById("userInput");
let gameResultElement=document.getElementById("gameResult");

//let roundednum=22;
function checkGuess(){
    let randinum=Math.random()*10;
    let roundednum=Math.ceil(randinum);
    let userGuess=parseInt(inputElemnt.value);//user input entered value 
    if(userGuess==roundednum){ //"==" is compared both values are equal or not true if 2=="2"  >> "===" compared with type and value are same or not false if "2"===2
        gameResultElement.textContent="hurray..! Correct guess "+roundednum;
        gameResultElement.style.backgroundColor="green";

    }
    else if (userGuess>roundednum){
        gameResultElement.textContent="little high..!, Guess again and number is "+roundednum;
        gameResultElement.style.backgroundColor="red";
        
    }
    else if(userGuess<roundednum){
        gameResultElement.textContent="little low..!, Guess again and number is "+roundednum;
        gameResultElement.style.backgroundColor="yellow";
    }
    else if(typeof(userGuess) != number){
        gameResultElement.textContent="Invalid input";
        gameResultElement.style.backgroundColor="white";
    }
};