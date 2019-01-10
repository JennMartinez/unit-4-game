// Create global variables for the crystal game: // 
// wins, losses, random generated number, random value for crystals, and player's total score //

var wins = 0;
var losses = 0;
var random;
var crystalValue = [];
var score = 0;

// Document Ready Event //
$(document).ready(function(){

// A random number needs to be generated and displayed at the start of the game, 19 - 120 //

var min = 19;
var max = 120;
random = Math.floor(Math.random()*(max-min+1)+min);
$(".randomNumber").html(random);
console.log(random);

// When a crystal is clicked, the number assigned to the crystal will be added to the player's total score //

$(".crystals").on("click", function() {
    $("#totalScore").html(score);
    var stones = crystalValue;
    score += stones; 
    console.log(stones);
    console.log(score); 
    console.log(crystalValue); 
})

// Each of the four crystals will generate a random number, 1 - 12, //
// The crystal's numeric value needs to stay visibly hidden //

// function generateNumber() {
//     var crystalValue = document.getElementById(".crystals")
//     crystalValue.innerHTML = Math.floor((Math.random() * 12) + 1);
// }

var min = 1;
var max = 12;
for (var i = 0; i < crystalValue.length; i++) {
    crystalValue = Math.floor(Math.random()*(max-min+1)+min);
    $(".crystals").html(crystalValue);
    console.log(crystalValue);
}

// The player WINS if their score EQUALS the random number generated at the beginning //
// The game should store the player's wins and losses //

if (score === random) {
    wins++
    $("#wins").html(wins);
    resetGame();
    console.log(wins);
}

// The player LOSSES if their score IS NOT EQUAL to the random number generated at the beginning //

else if (score > random) {
        losses++
        $("#losses").html(losses);
        resetGame();
        console.log(score);
}

// Restart the game after a WIN or LOSS //
// The player's score counter will reset to zero //
// A new random numeric value should generate at the start of a new game //
// The four crystals will generate new hidden numbers at the start of a new game //

function resetGame() {
    random = Math.floor(Math.random()*(max-min+1)+min);
    $(".randomNumber").html(random);

    $(".crystals").on("click", function() {
        $("#totalScore").html(score);
        var stones = crystalValue;
        score += stones;    
    })
    
    for(var i = 0; i < crystalValue.length; i++) {
        crystalValue = Math.floor(Math.random()*(max-min+1)+min);
        $(".crystals").html(crystalValue);
    }

    if (score === random) {
        wins++
        $("#wins").html(wins);
        resetGame();
    }

    else if (score > random) {
        losses++
        $("#losses").html(losses);
        resetGame();
    }
}
});
