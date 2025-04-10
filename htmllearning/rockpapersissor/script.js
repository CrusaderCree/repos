let options = { "1": "rock", "2": "paper", "3": "scissors" };
let playerGender = {1:"Male",2:"Female",3:"Uttlery Confused"};

// Array to store game history
let gameHistory = [];

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("game-form");
    const select = document.getElementById("user-choice");
    const selectGender = document.getElementById("user-Gender");

    for (let key in playerGender){
        const genOption = document.createElement("option"); // create a new <option> element
        genOption.value = playerGender[key]; // set the value of the <option> element   
        genOption.textContent = playerGender[key]; // set the text content of the <option> element
        selectGender.appendChild(genOption); // append the <option> element to the <select> element
    }

    for (let key in options){
        const option = document.createElement("option"); // create a new <option> element
        option.value = options[key]; // set the value of the <option> element   
        option.textContent = options[key].charAt(0).toUpperCase() + options[key].slice(1); // set the text content of the <option> element
        select.appendChild(option); // append the <option> element to the <select> element
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get player's choice
        const playerChoice = document.getElementById("user-choice").value;
        const playerfname = document.getElementById("user-fname").value;
        const playerlname = document.getElementById("user-lname").value;
        const playerGenderChosen = document.getElementById("user-Gender").value; 

        //populate the select element with options

        // Calculate computer's choice
        const computerChoiceNum = Math.floor(Math.random() * 3) + 1; // Fixed "randonm" typo
        const computerChoice = options[computerChoiceNum];
        
        // Determine and display result
        const result = determineWinner(playerChoice, computerChoice);

        const gameResult = {
            playerName: { 
                firstName: playerFname, 
                lastName: playerLname, 
                gender: playerGenderChosen 
            },  
            player: playerChoice, 
            computer: computerChoice, 
            outcome: result 
        };

        gameHistory.push(gameresult); // Store the result in the history
        console.log(gameHistory); // Log the history to the console for debugging

        document.getElementById("result").textContent = result; // Removed extra "Result: " for simplicity
    });
});

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return `It’s a tie! Computer chose ${computerChoice}`;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win! Computer chose ${computerChoice}`;
    } else {
        return `Computer wins! Computer chose ${computerChoice}`;
    }
}