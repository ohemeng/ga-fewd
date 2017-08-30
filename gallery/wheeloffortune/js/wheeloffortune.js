var arr = [90, 360];
var st = 100;
var score = 0;
var randomNum = 0;
var play = 0;
var crunchSound = new Audio("img/crunch.wav");
var scoreArray = [700, "play again", 650, "bankrupt", 900, 500, 350, 600, 500, 400, 
550, 800, 300, 700, 900, 500, 5000, "bankrupt", 300, 500, 450, 500, 800, "lose"];

function addScore(x){
	console.log("scoreArray = "+ scoreArray[x]);
	if(scoreArray[x] == "play again"){
		score = 0;
		$(".score").html("Play Again");
	}
	else if(scoreArray[x] == "bankrupt"){
		score = 0;
		$(".score").html(parseInt(0));
	}
	else if(scoreArray[x] == "lose"){
  	$('.modal').modal('show');
	}
	else{
		score = score + scoreArray[x];
		$(".score").html(score);
	}
	crunchSound.pause();
}

$(".spinBtn").on("click", function(){
	crunchSound.loop = true;
	crunchSound.play();
	play = play + 1;
	randomNum = Math.floor(Math.random()*23) + 1;
	console.log(randomNum);
	var degSpin = randomNum * 15;
	var degSpinDeg = degSpin + "deg";
	var rotateDeg = "rotate(" + degSpinDeg + ")";
	var spinWheel = "spinWheel" + (degSpin);
	var spinClass = "spinClass" + (degSpin);

	var spin = "spin" + (degSpin) + " 2s";
	$(".wheel").css("animation", spin);
	$(".wheel").css("transform", rotateDeg);
	setTimeout(showArrow, 1000);
	$(".arrow").css("z-index", "0");
})
function showArrow(){
	$(".arrow").css("z-index", "1");
	setTimeout(addScore(randomNum), 5000);
	if (play >= 3){
		$('.modal').modal('show');
		$('.title1').text("You have played 3 times");
		$('.title2').text("");
		// $('.spinBtn').css('visibility', 'hidden');
		$('.spinBtn').attr('disabled', true);
		$('.modal').data('bs.modal').options.backdrop = 'static'; //disables dismissing by clicking the body
	}
}

$(".close").on("click", function(){
	score = 0;
	$(".score").html(score);
	play = 0;
	// $('.spinBtn').css('visibility', 'visible');
	$('.spinBtn').attr('disabled', false);
})

$('.wheel').hover(function(){
		$(".wheel").css("transition", "3s");
	$(".wheel").css("transform", "rotateY(+360deg)");
})


