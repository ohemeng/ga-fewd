var randAngle;
var randomNum;
var randomDir = "left";
var randomDirNum;
var randomdive;
var move;
var moveball;
var negpos;
var kickSound = new Audio("wav/soccerkick.m4a");
var cheeringSound = new Audio("wav/cheering.m4a");
var goalSound = new Audio("wav/goal.m4a");
var missedSound = new Audio("wav/missed.m4a");
var blockedSound = new Audio("wav/blocked.m4a");
var yourscore = 0;
var keeperscore = 0;
var totalshots = 0;

//Using mouse to kick the ball
$(".soccerball").on("click", function(){
	kickSound.play();
	totalshots++;
	$(".totalShots").text(totalshots);
    	$(".soccerball").css("position", "relative");
    	$(".soccerball").css("transition", "top 1s, left 1s, right 1s, width 1s, height 1s");
   //  	console.log("randomDir ="+ randomDir);
			// console.log("move = "+ move);
			// console.log("negpos "+negpos)
			moveball =  move + "vw";
			$(".soccerball").css(randomDir, moveball);
			$(".soccerball").css("top", "12vw");
			// $(".soccerball").css("transform", "rotate(120deg");
			$(".keeper-dive").css("transition", "left 1s, right 1s, transform 1s");
			$(".soccerball").css("width", "2vw");
			$(".soccerball").css("height", "2vw");
			dive();
			setTimeout(checkgoal, 1000);
	$(document).mousemove(function(event){
		$(".soccerball").css("left", 0);
	});

})

// ---------------------------------------------------
$(document).mousemove(function(event){
  $(".soccerball").css("left", event.pageX);
});
// // --------------------------------------------------
//Using mouse to set ball again
$(".tryAgain").on("click", function(){
	$("h1").css("animation", "");
  $("h1").text("Kick Shots");
	$("h1").css("background", "linear-gradient(green, white)");
	$(".soccerball").css("position", "absolute");
	$(".soccerball").css("transition", "top 0s, left 0s");
	$(".soccerball").css("top", "50vw");
	$(".soccerball").css("left", "45vw");
	$(".soccerball").css("z-index", "3");
	$(".keeper-position").removeClass("keeper-dive");
  $(".keeper-position").addClass("keeper");

   $(".keeper").css("background", "url('img/keeper.png')");
   $(".keeper").css("background-size", "cover");
	$(".keeper").css("transform", "rotate(0deg)");
	// $(".keeper").css(randomDir, "-="+ randomDive);
	$(".soccerball").css("width", "4vw");
	$(".soccerball").css("height", "4vw");
	$(document).mousemove(function(event){
  	$(".soccerball").css("left", event.pageX);
	});
})

//Using "K" to kick the ball
$(document).on('keydown', function (e) {
    if (e.which === 75){
    	totalshots++;
    	$(".totalShots").text(totalshots);
    	kickSound.play();
    	$(".soccerball").css("position", "relative");
    	$(".soccerball").css("transition", "top 1s, left 1s, right 1s, width 1s, height 1s, ease-out 1s");
			moveball =  move + "vw";
			$(".soccerball").css(randomDir, moveball);
			$(".soccerball").css("top", "12vw");
			// $(".soccerball").css("transform", "rotate(120deg");
			$(".keeper-dive").css("transition", "left 1s, right 1s, transform 1s");
			$(".soccerball").css("width", "2vw");
			$(".soccerball").css("height", "2vw");
			dive();
			setTimeout(checkgoal, 1000);

			$(document).mousemove(function(event){
				$(".soccerball").css("left", 0);
			});
    }
 })

function dive(){
	$(".keeper-position").toggleClass("keeper-dive");
	keeperWidth = $(".keeper-dive").width();
	keeperHeight = $(".keeper-dive").height();
	keeperPosition = $(".keeper-dive").position();
	keeperYPosition = keeperPosition.top;
	keeperXPosition = keeperPosition.left;
	leftOrRight();


	if(randomDir === "left"){
		$(".keeper-dive").css("background", "url('img/keeper_dive_r.png')");
	}else{
		$(".keeper-dive").css("background", "url('img/keeper_dive.png')");
	}
	$(".keeper-dive").css("background-size", "cover");

	randomNum = Math.floor(Math.random()* 10)* 20;
	randomDive = randomNum/5 + 300;

	randAngle = "rotate("+ randomNum + "deg)";
	move = randomNum / 2;
	$(".keeper-dive").css("transition", "left 1s, right 1s, transform 1s");
	$(".keeper").css("transition", "left 1s, right 1s, transform 1s");
	$(".keeper-dive").css(randomDir, randomDive);
	$(".keeper-dive").css("transform", randAngle);

	console.log("KeeperX "+keeperXPosition);
	console.log("keeperWidth "+keeperWidth);
}

function leftOrRight(){
	randomDirNum = Math.floor(Math.random()*2);
	// console.log("Math.random "+ randomDirNum)
	if (randomDirNum === 0){
		randomDir = "right";
		negpos = "+"
	} else {
		randomDir = "left";
		negpos = "-"
	}
}


// using the "A" key to kick again
$(document).on('keydown', function (e) {
    // console.log(e.which);
      if (e.which === 65){

      $("h1").css("animation", "");
      $("h1").text("Kick Shots");
      $("h1").css("background", "linear-gradient(green, white)");
      $(".soccerball").css("position", "absolute");
			$(".soccerball").css("transition", "top 0s, left 0s");
			$(".soccerball").css("top", "50vw");
			$(".soccerball").css("left", "45vw");
			$(".soccerball").css("z-index", "3");

			$(".keeper-dive").css("background", "url('')");
			$(".keeper-position").removeClass("keeper-dive");

		  $(".keeper-position").addClass("keeper");

									
			$(".keeper").css("transform", "rotate(0deg)");
    	$(".keeper").css("left", keeperXPosition);

    		$(".keeper").css("background", "url('img/keeper.png')");
    		$(".keeper").css("background-size", "cover");
			$(".soccerball").css("width", "4vw");
			$(".soccerball").css("height", "4vw");


    }
 })

function checkgoal(){
	var soccerballWidth = $(".soccerball").width();
	var soccerballPosition = $(".soccerball").position();
	var soccerballXPosition = soccerballPosition.left;
	var soccerballYPosition = soccerballPosition.top;

	var keeperWidth;
	var keeperHeight;
	var keeperPosition;
	var keeperYPosition;
	var keeperXPosition;

	keeperWidth = $(".keeper-dive").width();
	keeperHeight = $(".keeper-dive").height();
	keeperPosition = $(".keeper-dive").position();
	keeperYPosition = keeperPosition.top;
	keeperXPosition = keeperPosition.left;

	var goalpostWidth = $(".goalpost").width();
	var goalpostPosition = $(".goalpost").position();
	var goalpostXPosition = goalpostPosition.left;
	var goalpostYPosition = goalpostPosition.top;

	// console.log((soccerballXPosition > keeperXPosition));
	// console.log("ballX "+ soccerballXPosition);
	// console.log("goalX "+ goalpostXPosition);
	// console.log("goalWidth "+ goalpostWidth);
	if(soccerballXPosition <= goalpostXPosition  || soccerballXPosition >= (goalpostXPosition + goalpostWidth))
	{
		missedSound.play();
		$(".soccerball").css("top", "+=25px");
		$(".soccerball").css(randomDir, "-=30px");
		$(".soccerball").css("width", "1.5vw");
		$(".soccerball").css("height", "1.5vw");
		$(".soccerball").css("z-index", "1");
	}


	// check goalkeeper blocking the shot
	else if(soccerballXPosition > (keeperXPosition + 20)  && soccerballXPosition <= (keeperXPosition + keeperWidth))
	{
		blockedSound.play();
		bounceball();
		keeperscore = keeperscore + 1;
		$(".keeperScore").text(keeperscore);
	}
		else
	{
		goalSound.play();
		$(".soccerball").css("top", "+=25px");
		$(".soccerball").css("z-index", "2");
		$(".soccerball").css("width", "1.75vw");
		$(".soccerball").css("height", "1.75vw");
		$("h1").text("Goal!!!!");
		$("h1").css("animation", "blink 0.25s infinite");
		yourscore = yourscore + 1;
		$(".yourScore").text(yourscore);
	}
	checkShots();
}

function bounceball(){
	$(".soccerball").css("top", "30vw");
	$(".soccerball").css(randomDir, randomDive);
	$(".soccerball").css("width", "3vw");
	$(".soccerball").css("height", "3vw");
}

function checkShots(){
	if (totalshots === 10){
	 $('.modal').modal('show');
	 $('.modal').data('bs.modal').options.backdrop = 'static'; //disables dismissing by clicking the body
	}
}

$(".close").on("click", function(){
	location.reload();
})
