const max=prompt("Enter the max. number");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");
while (true){
    if(guess=="quit"){
        console.log("User Quit");
        break;
    }
    if(guess==random){
        console.log("You are Right, Congrats!");
        break;
    }
    else if (guess<random){
        guess=prompt("hint:Your guess was small Please Try Again");
    }
    else if(guess>random){
        guess=prompt("hint:Your guess is big, Please Try Again");
    }
    
}