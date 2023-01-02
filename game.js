const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
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

nextSequence();