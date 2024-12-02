// console.log($("h1").addClass("big-text"));
// console.log($("h1").addClass("big-text margin-text"));
// console.log($("h1").removeClass("big-text"));
// console.log($("h1").hasClass("big-text"));true/false
// console.log($("h1").text("Byeeee"));
// console.log($("button").html("<h1>benjamin</h1>"));
// $("img").attr("src", "../images/kick.png");
// $("a").attr("href", "http://www.yahoo.com");
// $("button").click(function () {
//   $("h1").css("color", "green");
// });
// $("h1").on("mouseover", function () {
//   $("h1").css("color", "green");
// });
// $("h1").before("<button>new</button>");after,prepent,append
// animations
// $("input").remove();hide,show,toggle.fadeout.fadein,fadetoggle,slideup,slidedown,slidetoggle,
// $("button").on("click", function () {
//   $("h1")
//     .css("color", "darkgreen")
//     .css("font-size", "5rem")
//     .fadeToggle()
//     .delay(100);
// });
// console.log($("h1").css("font-size"));
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
