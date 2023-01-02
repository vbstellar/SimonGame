const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStart = false;

$(document).on("keydown", function(){
    if(!gameStart){
        $("#level-title").text("Level "+level);
        nextSequence();
        gameStart = true;
    }
});


function nextSequence() {
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColor);
}

function handleClick(event) {
    var userChoosenColor = event.target.id;
    userClickedPattern.push(userChoosenColor);
    playSound(userChoosenColor);
    AnimtePress(userChoosenColor);
}

function playSound(name) {
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function AnimtePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(() => {
        $("#"+currentColour).removeClass("pressed");
    }, 10);
}

$(".btn").on("click", handleClick)
