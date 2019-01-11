// Create global variables for the crystal game: // 
// wins, losses, random generated number, random value for crystals, and player's total score //

var wins = 0;
var losses = 0;
var random;
var totalScore = 0;
var crystalValue = [];
var min = 19;
var max = 120;
var low = 1;
var high = 12;

// Document Ready Event //
$(document).ready(function(){

// A random number needs to be generated and displayed at the start of the game, 19 - 120 //

console.log(crystalValue);
resetGame();

// Each of the four crystals will generate a random number, 1 - 12, //
// The crystal's numeric value needs to stay visibly hidden //
// When a crystal is clicked, the number assigned to the crystal will be added to the player's total score //

var score = document.querySelector("#totalScore");

$("#purple").on("click", function() {
    totalScore = totalScore + crystalValue[0];
    console.log(totalScore);
});

$("#blue").on("click", function() {
    totalScore = totalScore + crystalValue[1];
    console.log(totalScore);
});

$("#yellow").on("click", function() {
    totalScore = totalScore + crystalValue[2];
    console.log(totalScore);
});

$("#green").on("click", function() {
    totalScore = totalScore + crystalValue[3];
    console.log(totalScore);
});

// The player WINS if their score EQUALS the random number generated at the beginning //
// The game should store the player's wins and losses //

// if (score === random) {
//     wins++
//     $("#wins").html(wins);
//     resetGame();
//     console.log(wins);
// }

// // The player LOSSES if their score IS NOT EQUAL to the random number generated at the beginning //

// else if (score > random) {
//         losses++
//         $("#losses").html(losses);
//         resetGame();
//         console.log(score);

// }
// Restart the game after a WIN or LOSS //
// The player's score counter will reset to zero //
// A new random numeric value should generate at the start of a new game //
// The four crystals will generate new hidden numbers //

function resetGame() {
    // Generates random number for the main number //
    random = Math.floor(Math.random()*(max-min+1)+min);
    $(".randomNumber").html(random);
    console.log(random);

    for (var i = 0; i < 4; i++) {
        crystalValue.push(Math.floor(Math.random()*(high-low+1)+low));
        console.log(crystalValue);  
    }

    if (totalScore === random) {
        wins++
        $("#wins").html(wins);
        resetGame();
        console.log(wins);
    }

    else if (totalScore > random) {
        losses++
        $("#losses").html(losses);
        resetGame();
    }
}
});
