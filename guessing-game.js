let max = parseInt(prompt("Enter the maximum number: "));
while(!max){
    max = parseInt(prompt("Enter a valid maximum number: "));
}
let num = Math.floor(Math.random() * max +1)  
let guess = prompt("Guess the number: ")
let attempts = 1

while(true){
    attempts ++;
    if (guess < num){
        guess = parseInt(prompt("Too low. Guess again:"))
    }else if (guess > num){
        guess = parseInt(prompt("Too high. Guess again:"))
    }else {
        console.log(`You win! It took you ${attempts} guesses`);
        break;
    }
}