var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
console.log("Width: " + windowWidth);
console.log("Height: " + windowHeight)

var shipPosition = $(".spaceship").position();
var shipXPosition = shipPosition.left;
var shipYPosition = shipPosition.top;

// crush count
var count = 0;

console.log("x pos: " + shipXPosition);
console.log("y pos: " + shipYPosition);

//create sound for bounce

var crushSound = new Audio("wav/playerHit.wav");
var glassSound = new Audio("wav/glass.wav");
var spinSound = new Audio("wav/gameStart.wav");
var hitSound = new Audio("wav/enemyHit.wav");

var redHit = 0;
var greenHit = 0;

$(document).on('keydown', function (e) {
    console.log(e.which);  //or alert(e.which);

   	var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		console.log("Width: " + windowWidth);
		console.log("Height: " + windowHeight)

		var shipPosition = $(".spaceship").position();
		var shipXPosition = shipPosition.left;
		var shipYPosition = shipPosition.top;

		console.log("x pos: " + shipXPosition);
		console.log("y pos: " + shipYPosition);

  if (shipXPosition <= (windowWidth - 200) && shipXPosition >= 8 && (shipYPosition <= (windowHeight - 100) && shipYPosition >= 8)){

   if(e.which === 39){
   	/* $(".spaceship").css("transition", "left 1s"); */
   	$(".spaceship").css("left", "+=40px");
   }

   if(e.which === 37){
   	$(".spaceship").css("left", "-=40px");
   }
   if(e.which === 40){
   	$(".spaceship").css("top", "+=40px");
   }
   if(e.which === 38){
   	$(".spaceship").css("top", "-=40px");
   }

// R to rotate 45 degrees
   if(e.which === 82){
   	$(".spaceship").css("transform", "rotate(45deg)");
   }

// E to rotate -45 degrees
   if(e.which === 69){
   	$(".spaceship").css("transform", "rotate(-45deg)");
   }

// T to rotate 90 degrees
   if(e.which === 84){
   	$(".spaceship").css("transform", "rotate(90deg)");
   }

// W to rotate 180 degrees
   if(e.which === 87){
   	$(".spaceship").css("transform", "rotate(360deg)");
   }

// Q to rotate 0 degrees
   if(e.which === 81){
   	$(".spaceship").css("transform", "rotate(0deg)");
   	$(".spaceship").css("background", "rgba(0,0,0,0)");
   	$(".spaceship").css("box-shadow", "0 0 0");
   }
// Return key to rotate 360 degrees
    if(e.which === 13){
    	glassSound.play();
    	$(".spaceship").css("box-shadow", "10px 10px 70px yellow");
    	$(".spaceship").css("transform", "rotate(180deg)");
    	$(".spaceship").css("border-radius", "100%");
			$(".spaceship").css("animation", "mymove 1s");
			spinSound.play();
			$(".spaceship").css("animation-iteration-count", "3");
		
   }
   	var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		console.log("Width: " + windowWidth);
		console.log("Height: " + windowHeight)

		var shipPosition = $(".spaceship").position();
		var shipXPosition = shipPosition.left;
		var shipYPosition = shipPosition.top;

		console.log("x pos: " + shipXPosition);
		console.log("y pos: " + shipYPosition);

 	} else if (shipXPosition > (windowWidth - 200)){
 		crushSound.play();
 		$(".spaceship").css("background", "radial-gradient(red,yellow)");
 		$(".spaceship").css("box-shadow", "10px 10px 70px yellow");
 		$(".spaceship").css("border-radius", "100%");
 		$(".spaceship").css("left", "-100px");
		$(".spaceship").css("transform", "rotate(180deg)");
		count = count + 1;
		$("#count").text(count);
 	} else if (shipXPosition < 8){
 		crushSound.play();
 		$(".spaceship").css("left", "100px");
 		$(".spaceship").css("transform", "rotate(180deg)");
 		$(".spaceship").css("background", "rgba(0,0,0,0)");
 		count = count + 1;
		$("#count").text(count);
 	} else if (shipYPosition > (windowHeight - 100)){
 		crushSound.play();
 		$(".spaceship").css("background", "radial-gradient(red,yellow)");
 		$(".spaceship").css("box-shadow", "10px 10px 70px yellow");
 		$(".spaceship").css("border-radius", "100%");
 		$(".spaceship").css("top", "-100px");
 		$(".spaceship").css("transform", "rotate(180deg)");
 		count = count + 1;
		$("#count").text(count);
 	} else if (shipYPosition < 8){
 		crushSound.play();
 		$(".spaceship").css("top", "100px");
 		$(".spaceship").css("transform", "rotate(180deg)");
 		$(".spaceship").css("background", "rgba(0,0,0,0)");
 		count = count + 1;
		$("#count").text(count);
 	}

 		/* Vanishing boxes */
 		if(shipXPosition > 400 && shipXPosition < 500 && shipYPosition > 125 && shipYPosition < 275){
 			if(redHit === 0){
 			hitSound.play();
 			$(".redBox").fadeOut();
 			redHit++;
 		}
 	}

 		if(shipXPosition > 100 && shipXPosition < 200 && shipYPosition > 350 && shipYPosition < 550){
 			if(greenHit === 0){
 			hitSound.play();
 			$(".greenBox").fadeOut();
 			greenHit++;
 		}
 	}

	});

	