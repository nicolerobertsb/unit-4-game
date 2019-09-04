// 1. create variables

var ruby;
var sapphire;
var diamond;
var emerald;
var userScore;
var crystals = [ruby, sapphire, diamond, emerald];
var max = 120; // max value for the target score
var min = 19;   // min value for the target score
var maxCrystals = 12;   // max value for crystals
var minCrystals = 1;    // min value for crystals
var wins = 0;
var loss = 0;


// 2. create a reset function to reset the variable


// 3. generate random target score

var targetScore = Math.floor(Math.random() * 120) + 1;
console.log(targetScore);

    // display random target score to the user

$("#targetScoreSpot").text("Random Number: " + targetScore);

// 3. set user score to 0


    // display user score on the web page


// 4. get value for each crystal


// 5. when user clicks on a crystal, add crystal to user score


// 6. update user score on page

// 7. calculate wins

// 8. calculate losses

// 9. check if game is over

// reset all variables