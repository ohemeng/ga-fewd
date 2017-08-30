var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
// console.log("Width: " + windowWidth);
// console.log("Height: " + windowHeight)

var samuraiWidth = $("#samurai").width();
console.log("Samurai width: " + samuraiWidth);

var samuraiPosition = $("#samurai").position();
var samuraiXPosition = samuraiPosition.left;
var samuraiYPosition = samuraiPosition.top;

var blueBalloonPosition = $(".blueBalloon").position();
var blueBalloonXPosition = blueBalloonPosition.left;
var blueBalloonYPosition = blueBalloonPosition.top;

// crush count
var count = 0;

console.log("x pos: " + samuraiXPosition);
// console.log("y pos: " + samuraiYPosition);

//create sound for bounce

var crushSound = new Audio("wav/playerHit.wav");
var glassSound = new Audio("wav/glass.wav");
var spinSound = new Audio("wav/gameStart.wav");
var hitSound = new Audio("wav/enemyHit.wav");

var blueHit = 0;
var greenHit = 0;

$(document).on('keydown', function (e) {
    console.log(e.which);  //or alert(e.which);
    console.log("Samurai X pos: " + samuraiXPosition);
    console.log("Blue Balloon X pos: " + blueBalloonXPosition);

   	var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		// console.log("Width: " + windowWidth);
		// console.log("Height: " + windowHeight)

		var samuraiPosition = $("#samurai").position();
		var samuraiXPosition = samuraiPosition.left;
		var samuraiYPosition = samuraiPosition.top;

		// console.log("x pos: " + samuraiXPosition);
		// console.log("y pos: " + samuraiYPosition);

  if (samuraiXPosition <= (windowWidth - 200) && samuraiXPosition >= 8 && (samuraiYPosition <= (windowHeight - 100) && samuraiYPosition >= 8)){

   if(e.which === 39){
   /* $("#samurai").animate({left: '+=40px'}); */
    $("#samurai").css("left", "+=40px");
   }

   if(e.which === 37){
    $("#samurai").animate({left: '-=40px'});
  /* 	$("#samurai").css("left", "-=40px"); */
   }
   if(e.which === 40){
    $("#samurai").animate({top: '+=40px'});
  /* 	$("#samurai").css("top", "+=40px"); */
   }
   if(e.which === 38){
    $("#samurai").animate({top: '-=40px'});
   /*	$("#samurai").css("top", "-=40px"); */
   }

// R to rotate 45 degrees
   if(e.which === 82){
   	$("#samurai").css("transform", "rotate(45deg)");
   }

// E to rotate -45 degrees
   if(e.which === 69){
   	$("#samurai").css("transform", "rotate(-45deg)");
   }

// T to rotate 90 degrees
   if(e.which === 84){
   	$("#samurai").css("transform", "rotate(90deg)");
   }

// W to rotate 180 degrees
   if(e.which === 87){
   	$("#samurai").css("transform", "rotate(360deg)");
   }

// Q to rotate 0 degrees
   if(e.which === 81){
   	$("#samurai").css("transform", "rotate(0deg)");
   	$("#samurai").css("background", "rgba(0,0,0,0)");
   	$("#samurai").css("box-shadow", "0 0 0");
   }
// Return key to rotate 360 degrees
    if(e.which === 13){
    	glassSound.play();
    	$("#samurai").css("box-shadow", "10px 10px 70px yellow");
    	$("#samurai").css("transform", "rotate(180deg)");
    	$("#samurai").css("border-radius", "100%");
			$("#samurai").css("animation", "mymove 1s");
			spinSound.play();
			$("#samurai").css("animation-iteration-count", "3");
		
   }
   	var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		// console.log("Width: " + windowWidth);
		// console.log("Height: " + windowHeight)

		var samuraiPosition = $("#samurai").position();
		var samuraiXPosition = samuraiPosition.left;
		var samuraiYPosition = samuraiPosition.top;

		// console.log("x pos: " + samuraiXPosition);
		// console.log("y pos: " + samuraiYPosition);

 	} else if (samuraiXPosition > (windowWidth - 200)){
 		crushSound.play();
 		$("#samurai").css("background", "radial-gradient(red,yellow)");
 		$("#samurai").css("box-shadow", "10px 10px 70px yellow");
 		$("#samurai").css("border-radius", "100%");
 		$("#samurai").css("left", "-100px");
		$("#samurai").css("transform", "rotate(180deg)");
		count = count + 1;
		$("#count").text(count);
 	} else if (samuraiXPosition < 8){
 		crushSound.play();
 		$("#samurai").css("left", "100px");
 		$("#samurai").css("transform", "rotate(180deg)");
 		$("#samurai").css("background", "rgba(0,0,0,0)");
 		count = count + 1;
		$("#count").text(count);
 	} else if (samuraiYPosition > (windowHeight - 100)){
 		crushSound.play();
 		$("#samurai").css("background", "radial-gradient(red,yellow)");
 		$("#samurai").css("box-shadow", "10px 10px 70px yellow");
 		$("#samurai").css("border-radius", "100%");
 		$("#samurai").css("top", "-100px");
 		$("#samurai").css("transform", "rotate(180deg)");
 		count = count + 1;
		$("#count").text(count);
 	} else if (samuraiYPosition < 8){
 		crushSound.play();
 		$("#samurai").css("top", "100px");
 		$("#samurai").css("transform", "rotate(180deg)");
 		$("#samurai").css("background", "rgba(0,0,0,0)");
 		count = count + 1;
		$("#count").text(count);
 	}

 		/* Vanishing boxes */
 		// if(samuraiXPosition > 400 && samuraiXPosition < 500 && samuraiYPosition > 125 && samuraiYPosition < 275){
 		// 	if(blueHit === 0){
 		// 	hitSound.play();
 		// 	$(".blueBalloon").fadeOut();
 		// 	blueHit++;
 		//  }
 	 //  }

/* When blue balloon is hit */
    if((samuraiXPosition + samuraiWidth) >= blueBalloonXPosition){
      hitSound.play();
      $(".blueBalloon").fadeOut();
      blueHit++;
    }

/* When red balloon is hit */
 		if(samuraiXPosition > 100 && samuraiXPosition < 200 && samuraiYPosition > 350 && samuraiYPosition < 550){
 			if(greenHit === 0){
 			hitSound.play();
 			$(".greenBox").fadeOut();
 			greenHit++;
 		 }
 	  }

	});