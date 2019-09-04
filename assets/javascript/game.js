// 1. create variables

var ruby;
var sapphire;
var diamond;
var emerald;
var userScore;
var crystalValue = [ruby, sapphire, diamond, emerald];
var max = 120; // max value for the target score
var min = 19;   // min value for the target score
var maxCrystals = 12;   // max value for crystals
var minCrystals = 1;    // min value for crystals
var wins = 0;
var loss = 0;


// 2. create a reset function to reset the variable


// 3. generate random target score

var targetScore = Math.floor(Math.random() * 120) + 1;
console.log("Random Number: " + targetScore);

// display random target score to the user

$("#targetScoreSpot").text("Random Number: " + targetScore);

// 3. set user score to 0

userScore = 0;

// display user score on the web page

$("#score").text(userScore);

// 4. get value for each crystal

for (var i = 0; i < crystalValue.length; i++) {
    crystalValue[i] = Math.floor(Math.random() * maxCrystals) + minCrystals;

    if (i === 0) {
        console.log("Ruby Value: " + crystalValue[i]);
    }
    else if (i === 1) {
        console.log("Sapphire Value: " + crystalValue[i]);
    }
    else if (i === 2) {
        console.log("Diamond Value: " + crystalValue[i]);
    }
    else {
        console.log("Emerald Value: " + crystalValue[i]);
        console.log("-----------------");
    }
}

// 5. when user clicks on a crystal, add crystal to user score


// 6. update user score on page

// 7. calculate wins

function wins() {
    if (userScore === targetScore) {
        win++;
        $("#wins").text(wins)
    }
}

// 8. calculate losses

function loss() {
    if (userScore > targetScore) {
        loss++;
        $("#losses").text(loss)
    }
}

// 9. check if game is over

// reset all variables