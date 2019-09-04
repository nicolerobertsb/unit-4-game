
$(document).ready(function () {

    // 1. create variables

    var ruby;
    var sapphire;
    var diamond;
    var emerald;
    var userScore = 0;
    var win = 0;
    var loss = 0;

    // generate random target score

    var targetScore = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log("-----------------");
    console.log("Random Number: " + targetScore);

    // display random target score to the user

    $("#targetScoreSpot").text("Random Number: " + targetScore);


    // get value for each crystal

    console.log("-----------------");
    ruby = Math.floor(Math.random() * 11 + 1);
    console.log("Ruby Value: " + ruby);
    sapphire = Math.floor(Math.random() * 11 + 1);
    console.log("Sapphire Value: " + sapphire);
    diamond = Math.floor(Math.random() * 11 + 1);
    console.log("Diamond Value: " + diamond);
    emerald = Math.floor(Math.random() * 11 + 1);
    console.log("Emerald Value: " + emerald);
    console.log("-----------------");

    $("#wins").text(win);
    $("#losses").text(loss);

    // create a reset function to reset the variable


    function reset() {

        targetScore = Math.floor(Math.random() * (120 - 19)) + 19;

        console.log("-----------------");
        console.log("Random Number: " + targetScore);

        $("#targetScoreSpot").text("Random Number: " + targetScore);

        console.log("-----------------");
        ruby = Math.floor(Math.random() * 11 + 1);
        console.log("Ruby Value: " + ruby);
        sapphire = Math.floor(Math.random() * 11 + 1);
        console.log("Sapphire Value: " + sapphire);
        diamond = Math.floor(Math.random() * 11 + 1);
        console.log("Diamond Value: " + diamond);
        emerald = Math.floor(Math.random() * 11 + 1);
        console.log("Emerald Value: " + emerald);
        console.log("-----------------");

        userScore = 0;

        $("#score").text(userScore);
    }

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
        userScore = userScore + ruby;
        wins();
        losses();
        $("#score").text(userScore);
        console.log("New user score= " + userScore)
        return userScore;

    })


    // sapphire

    $("#sapphire").on("click", function () {
        userScore = userScore + sapphire;
        wins();
        losses();
        $("#score").text(userScore);
        console.log("New user score= " + userScore)
        return userScore;
    })


    // diamond

    $("#diamond").on("click", function () {
        userScore = userScore + diamond;
        wins();
        losses();
        $("#score").text(userScore);
        console.log("New user score= " + userScore)
        return userScore;
    })

    // emerald

    $("#emerald").on("click", function () {
        userScore = userScore + emerald;
        wins();
        losses();
        $("#score").text(userScore);
        console.log("New user score= " + userScore)
        return userScore;
    })


});