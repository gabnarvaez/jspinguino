alert("you have found the secret penguin game!")
alert("Everyday two penguins die because of global warming, if you guess this game you could save them all.")

function penguinGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess = false;

    while (!guess) {
        let chance = parseInt(prompt("Guess a number of penguins between 1 and 100"));
        attempts++;

        if (chance === randomNumber) {
            alert("Congrats! You saved all the penguins in Antarctica by guessing " + randomNumber + " penguins in " + attempts + " attempts.");
            guess = true;
        }
        else if (chance < randomNumber) {
            alert("Those are too few penguins, go higher!");
        }
        else {
            alert("Those are too many penguins, go lower!");
        }

    
    }
}

penguinGame();

