var randomplace = Math.floor(Math.random()* 80 + 10);
var randomplace2 = randomplace + "vw";
var randomdir = Math.floor(Math.random()* 2);
var updown;
var balloonpop = new Audio("wav/enemyHit.wav");
var fireSong = new Audio("wav/fire.mp3");
var redcount = 1;
var bluecount = 1;
var totalcount = 0;
var clocking = 300;
var widthvar;
var heightvar;

var skyr = 135;
var skyg = 206;
var skyb = 255;

$(".bronze, .silver, .gold, .bronzeM, .silverM, .goldM").css("display", "none");

$(".container").on("click", function(){
	fireSong.play();
})

function fall(){
	
	randomplace = Math.floor(Math.random()* 80);
	randomplace2 = randomplace + "vw";
	direction();
	$(".blueballoon").css("left", randomplace2);
	
	randomplace = Math.floor(Math.random()* 80);
	randomplace2 = randomplace + "vw";
	direction();
	$(".redballoon").css("left", randomplace2);

	goback();
}



function goback(){
	$(".blueballoon").css("animation", updown + " 3s infinite alternate");
	$(".redballoon").css("animation", updown + " 2s infinite alternate");
}

	setInterval(fall, 4000);

function direction(){
	randomdir = Math.floor(Math.random()* 2);
	if (randomdir === 1){
		updown = "fallanimationup";
	} else {
		updown = "fallanimationdown";
	}
}

$(".blueballoon").on("click", function(){
	// flyb();
	$(".blueballoon").addClass("blueexplode");
	$(".blueballoon").css("animation", "shrink 1s");

	balloonpop.play();
	setTimeout(bluedisappear, 1000);
	bluecount--;
	$(".total").toggleClass("totalRota");
	totalcount++;
	$(".totalcount").text(totalcount);
})

$(".redballoon").on("click", function(){
	// flyr();
	$(".redballoon").addClass("redexplode");
	$(".redballoon").css("animation", "shrink 1s");

	balloonpop.play();
	setTimeout(reddisappear, 1000);
	redcount--;
	$(".total").toggleClass("totalRota");
	totalcount++;
	$(".totalcount").text(totalcount);
})

function bluedisappear(){
		$(".blueexplode").css("display", "none");
		if(bluecount === 0 && redcount === 0){
			$(".blueballoon").css("display", "block");
			$(".redballoon").css("display", "block");
			blowupagain();
		}
}

function reddisappear(){
		$(".redexplode").css("display", "none");
		if(bluecount === 0 && redcount === 0){
			$(".redballoon").css("display", "block");
			$(".blueballoon").css("display", "block");
			blowupagain();
		}
}

function flyr(){
	$(".redballoon").css("animation", "fly 1s");
}

function flyb(){
	$(".blueballoon").css("animation", "fly 2s");
}

function blowupagain(){
	redcount = 1;
	bluecount = 1;
	widthvar = (randomplace + 5) + "vw"; 
	heightvar = (randomplace + 5) + "vw";
	changeBlueColor();
	$(".blueballoon").css("width", widthvar);
	$(".blueballoon").css("height", heightvar);
	$(".blueballoon").removeClass("blueexplode");
	changeRedColor();
	$(".redballoon").css("width", widthvar);
	$(".redballoon").css("height", heightvar);
	$(".redballoon").removeClass("redexplode");

	skyr-=10;
	skyg-=10;
	skyb-=10;

	$(".container").css("background", "linear-gradient(rgb(" +skyr+ "," +skyg+ "," +skyb+ ") 5%, white 95%)");

	function changeRedColor(){
		if(randomplace < 25){
			$(".redballoon").css("background-image", "url('img/green_balloon.png')");
		}else if(randomplace > 25 && randomplace < 50) {
			$(".redballoon").css("background-image", "url('img/red_balloon.png')");
		}else{
			$(".redballoon").css("background-image", "url('img/bronze_balloon.png')");
		}
	}

	function changeBlueColor(){
		if(randomplace < 40){
			$(".blueballoon").css("background-image", "url('img/yellow_balloon.png')");
		}else if(randomplace > 25 && randomplace < 50) {
			$(".blueballoon").css("background-image", "url('img/blue_balloon.png')");
		}else {
			$(".blueballoon").css("background-image", "url('img/pink_balloon.png')");
		}
	}

	switch(totalcount){
		case 20:
		$(".bronze, .bronzeM").css("display", "inline-block");
		break;
		case 60:
		$(".silver, .silverM").css("display", "inline-block");
		break;
		case 100:
		$(".gold, .goldM").css("display", "inline-block");
		break;
		default:
		break;
	}
}

$(".header").on("click", function(){
	$(".modal-title").text("Foul, you touched the title");
	fireSong.pause();
	$('.modal').modal('show');
	$('.modal').data('bs.modal').options.backdrop = 'static'; //disables dismissing by clicking the body
})



setInterval(clock, 1000);

function clock(){
	clocking--;
	$(".clocking").text(clocking);
	if(clocking === 0){
		$('.modal').modal('show');
	 	$('.modal').data('bs.modal').options.backdrop = 'static'; //disables dismissing by clicking the body
	}
}

$(".close").on("click", function(){
	location.reload();
})


