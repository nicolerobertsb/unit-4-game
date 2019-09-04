
$(document).ready(function () {

    // 1. create variables

    var ruby;
    var sapphire;
    var diamond;
    var emerald;
    var userScore;
    var crystalValue = [ruby, sapphire, diamond, emerald];
    var win = 0;
    var loss = 0;

    // generate random target score

    var targetScore = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log("-----------------");
    console.log("Random Number: " + targetScore);

    // display random target score to the user

    $("#targetScoreSpot").text("Random Number: " + targetScore);

    // get value for each crystal

    for (var i = 0; i < crystalValue.length; i++) {
        crystalValue[i] = Math.floor(Math.random() * 12) + 1;

        if (i === 0) {
            console.log("-----------------");
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

    // create a reset function to reset the variable

    function reset() {
        var targetScore = Math.floor(Math.random() * (120 - 19)) + 19;
        console.log("Random Number: " + targetScore);
        $("#targetScoreSpot").text("Random Number: " + targetScore);
        userScore = 0;

        for (var i = 0; i < crystalValue.length; i++) {
            crystalValue[i] = Math.floor(Math.random() * 12) + 1;

            if (i === 0) {
                console.log("-----------------");
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
    }

    //  set user score to 0

    userScore = 0;

    // display user score on the web page

    $("#score").text(userScore);


    // calculate wins

    function wins() {
        if (userScore === targetScore) {
            win++;
            $("#wins").text(win);
            reset();
        }
    }

    // calculate losses

    function losses() {
        if (userScore > targetScore) {
            loss++;
            $("#losses").text(loss)
            reset();
        }
    }

    // when user clicks on a crystal, add crystal to user score

    // ruby

    $("#ruby").on("click", function () {
        userScore += crystalValue[0];
        wins();
        losses();
        $("#score").text(userScore);
        console.log("New user score= " + userScore)
        return userScore;

    })


    // sapphire

    $("#sapphire").on("click", function () {
        userScore += crystalValue[1];
        wins();
        losses();
        $("#score").text(userScore);
        console.log("New user score= " + userScore)
        return userScore;
    })


    // diamond

    $("#diamond").on("click", function () {
        userScore += crystalValue[2];
        wins();
        losses();
        $("#score").text(userScore);
        console.log("New user score= " + userScore)
        return userScore;
    })

    // emerald

    $("#emerald").on("click", function () {
        userScore += crystalValue[3];
        wins();
        losses();
        $("#score").text(userScore);
        console.log("New user score= " + userScore)
        return userScore;
    })


});