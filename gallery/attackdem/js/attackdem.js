var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
// console.log("Width: " + windowWidth);
// console.log("Height: " + windowHeight)

var soldier1Width = $("#soldier1").width();
console.log("soldier1 width: " + soldier1Width);

var boxPosition = $(".box").position();
var boxXPosition = boxPosition.left;
var boxYPosition = boxPosition.top + 5;

var soldier1Position = $("#soldier1").position();
var soldier1XPosition = soldier1Position.left;
var soldier1YPosition = soldier1Position.top;

var bullet1Width = $(".bullet1").width();
var bullet1Position = $(".bullet1").position();
var bullet1XPosition = bullet1Position.left;
var bullet1YPosition = bullet1Position.top;

var blueBalloonWidth = $(".blueBalloon").width();
var blueBalloonHeight = $(".blueBalloon").height();
var blueBalloonPosition = $(".blueBalloon").position();
var blueBalloonXPosition = blueBalloonPosition.left;
var blueBalloonYPosition = blueBalloonPosition.top;

var redBalloonWidth = $(".redBalloon").width();
var redBalloonHeight = $(".redBalloon").height();
var redBalloonPosition = $(".redBalloon").position();
var redBalloonXPosition = redBalloonPosition.left;
var redBalloonYPosition = redBalloonPosition.top;

// crush count
var count = 0;
var score = 0;

console.log("x pos: " + soldier1XPosition);
// console.log("y pos: " + soldier1YPosition);

//create sound for bounce

var helicopterSound = new Audio("wav/helicopter.mp3");
var helicopterSound2 = new Audio("wav/helicopter2.mp3");
var gunSound = new Audio("wav/gunshot.wav");
var crushSound = new Audio("wav/playerHit.wav");
var glassSound = new Audio("wav/glass.wav");
var spinSound = new Audio("wav/gameStart.wav");
var hitSound = new Audio("wav/enemyHit.wav");


var blueHit = 0;
var redHit = 0;
var beginTime = 60;

// create random backgrounds
var bg = ["stars", "warzone1", "warzone2", "warzone3", "warzone4"];

var randombg = Math.floor(Math.random() * 5);
var bgpic = bg[randombg];
var theUrl = 'img/' + bgpic + '.jpg';
var anotherUrl = "url(" + theUrl + ")";
$(".container").css("background", anotherUrl);
$(".container").css("background-repeat", "no-repeat");
$(".container").css("background-size", "cover");




// Start Timer
$(".start").on("click", function(){
  helicopterSound.play();
  helicopterSound2.play();
  helicopterSound.loop=true;
  helicopterSound2.loop=true;
  $(".blueBalloon").css("display", "none");
  score = 0;
  $(".start").css("display", "none");
  setInterval(function startTimer(){
    $("#time").text(beginTime);
    beginTime = beginTime - 1;
    if(beginTime === 0){
        $("#time").text(0);
        $(".solder1 img").css("display", "none");
        $(".redBalloon img").css("display", "none");
        $('.modal').modal('show');
        helicopterSound.pause();
        helicopterSound2.pause();
        return false;
    }
  } , 2000);
})

  /* ------------ Using the mouse ---------- */
  $(document).mousemove(function(event){
    $(".box").css("top", event.pageY - 50);
  });

  /* ---------- Mouse down to shooting the bullet with a mouse ------ */
  $(".box").mousedown(function(){
    gunSound.play();
    $(".smoke").css("width", "5vw");
    $(".smoke").css("border-radius", "50%");
    $(".smoke").css("box-shadow", "0px 0px 100px 10px orange");
    $(".bullet1").animate({left: "-=100vw"});
    setTimeout(checkRedBalloon, 300);
   })

    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    // console.log("Width: " + windowWidth);
    // console.log("Height: " + windowHeight)

    var soldier1Position = $("#soldier1").position();
    var soldier1XPosition = soldier1Position.left;
    var soldier1YPosition = soldier1Position.top;

    function checkRedBalloon(){
      bullet1Position = $(".bullet1").position();
      bullet1XPosition = bullet1Position.left;
      bullet1YPosition = bullet1Position.top;
      boxPosition = $(".box").position();
      boxXPosition = boxPosition.left;
      boxYPosition = boxPosition.top + 5;
      $(".smoke").css("box-shadow", "0 0 0 0");
         /* When red balloon is hit */
      if (redBalloonYPosition > boxYPosition){
        redHit = redHit;
        glassSound.play();
      } else if((redBalloonXPosition + redBalloonWidth) >= bullet1XPosition && (boxYPosition - redBalloonYPosition) <= redBalloonHeight) {
        $(".redBalloon").css("border-radius", "70%");
        $(".redBalloon").css("box-shadow", "5px 5px 100px 10px yellow");
        crushSound.play();
        $(".redBalloon").fadeOut(1000);
        redHit++;
        score++;
       $(".score").text(score);
      }
      setTimeout(showNewBalloon, 1000);
    }

    function showNewBalloon(){
      var newLocation = Math.random() * 500;
      var newSize = Math.random() * 100;
      redBalloonYPosition = newLocation;
      redBalloonHeight = newSize;
      $(".redBalloon").css("top", newLocation); 
      $(".redBalloon img").css("height", newSize);
      $(".redBalloon img").css("width", newSize);
      $(".redBalloon").fadeIn();
      $(".bullet1").css("display", "none");
      $(".bullet1").css("left", "+=100vw");
      $(".bullet1").css("display", "inline-block");
      $(".redBalloon").css("box-shadow", "0 0 0 0");
    }

    $(".close").on("click", function(){
      location.reload();
    })
/* ------------End of using the mouse ---------- */

$(document).on('keydown', function (e) {
    console.log(e.which);  //or alert(e.which);
    console.log("soldier1 X pos: " + soldier1XPosition);
    console.log("Blue Balloon X pos: " + blueBalloonXPosition);

   	var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		// console.log("Width: " + windowWidth);
		// console.log("Height: " + windowHeight)

		var soldier1Position = $("#soldier1").position();
		var soldier1XPosition = soldier1Position.left;
		var soldier1YPosition = soldier1Position.top;

		// console.log("x pos: " + soldier1XPosition);
		// console.log("y pos: " + soldier1YPosition);

  if ((soldier1XPosition <= windowWidth) && (soldier1YPosition <= windowHeight)){

   if(e.which === 39){
   /* $("#soldier1").animate({left: '+=40px'}); */
    $(".box").css("left", "+=40px");
   }

   if(e.which === 37){
    $(".box").animate({left: '-=40px'});
  /* 	$("#soldier1").css("left", "-=40px"); */
   }
   if(e.which === 40){
    $(".box").animate({top: '+=40px'});
  /* 	$("#soldier1").css("top", "+=40px"); */
   }
   if(e.which === 38){
    $(".box").animate({top: '-=40px'});
   /*	$("#soldier1").css("top", "-=40px"); */
   }

// // R to rotate 45 degrees
//    if(e.which === 82){
//    	$("#soldier1").css("transform", "rotate(45deg)");
//    }

// // E to rotate -45 degrees
//    if(e.which === 69){
//    	$("#soldier1").css("transform", "rotate(-45deg)");
//    }

// // T to rotate 90 degrees
//    if(e.which === 84){
//    	$("#soldier1").css("transform", "rotate(90deg)");
//    }

// // W to rotate 180 degrees
//    if(e.which === 87){
//    	$("#soldier1").css("transform", "rotate(360deg)");
//    }

// // Q to rotate 0 degrees
//    if(e.which === 81){
//    	$("#soldier1").css("transform", "rotate(0deg)");
//    	$("#soldier1").css("background", "rgba(0,0,0,0)");
//    	$("#soldier1").css("box-shadow", "0 0 0");
//    }

// // Return key to rotate 360 degrees
//     if(e.which === 13){
//     	glassSound.play();
//     	$("#soldier1").css("box-shadow", "10px 10px 70px yellow");
//     	$("#soldier1").css("transform", "rotate(180deg)");
//     	$("#soldier1").css("border-radius", "100%");
// 			$("#soldier1").css("animation", "mymove 1s");
// 			spinSound.play();
// 			$("#soldier1").css("animation-iteration-count", "3");
		
//   }
   	var windowWidth = window.innerWidth;
		var windowHeight = window.innerHeight;
		// console.log("Width: " + windowWidth);
		// console.log("Height: " + windowHeight)

		var soldier1Position = $("#soldier1").position();
		var soldier1XPosition = soldier1Position.left;
		var soldier1YPosition = soldier1Position.top;

		// console.log("x pos: " + soldier1XPosition);
		// console.log("y pos: " + soldier1YPosition);

 	} 

 //  else if (soldier1XPosition > (windowWidth - 200)){
 // 		crushSound.play();
 // 		$("#soldier1").css("background", "radial-gradient(red,yellow)");
 // 		$("#soldier1").css("box-shadow", "10px 10px 70px yellow");
 // 		$("#soldier1").css("border-radius", "100%");
 // 	//	$("#soldier1").css("left", "-100px");
	// // $("#soldier1").css("transform", "rotate(180deg)");
	// 	count = count + 1;
	// 	$("#count").text(count);
 // 	} else if (soldier1XPosition < 8){
 // 		crushSound.play();
 // 	//	$("#soldier1").css("left", "100px");
 // 	// $("#soldier1").css("transform", "rotate(180deg)");
 // 		$("#soldier1").css("background", "rgba(0,0,0,0)");
 // 		count = count + 1;
	// 	$("#count").text(count);
 // 	} else if (soldier1YPosition > (windowHeight - 100)){
 // 		crushSound.play();
 // 		$("#soldier1").css("background", "radial-gradient(red,yellow)");
 //  	$("#soldier1").css("box-shadow", "10px 10px 70px yellow");
 // 		$("#soldier1").css("border-radius", "100%");
 // 	//	$("#soldier1").css("top", "-100px");
 // 	//	$("#soldier1").css("transform", "rotate(180deg)");
 // 		count = count + 1;
	// 	$("#count").text(count);
 // 	} else if (soldier1YPosition < 8){
 // 		crushSound.play();
 // 	//	$("#soldier1").css("top", "100px");
 // 	//	$("#soldier1").css("transform", "rotate(180deg)");
 // 		$("#soldier1").css("background", "rgba(0,0,0,0)");
 // 		count = count + 1;
	// 	$("#count").text(count);
 // 	}

 		/* Vanishing boxes */
 		// if(soldier1XPosition > 400 && soldier1XPosition < 500 && soldier1YPosition > 125 && soldier1YPosition < 275){
 		// 	if(blueHit === 0){
 		// 	hitSound.play();
 		// 	$(".blueBalloon").fadeOut();
 		// 	blueHit++;
 		//  }
 	 //  }

// /* When blue balloon is hit */
//     if((soldier1XPosition + soldier1Width) >= blueBalloonXPosition){
//       hitSound.play();
//       $(".blueBalloon").fadeOut();
//       blueHit++;
//     }



// For the bullet
  
  // S to shoot the bullet
   if(e.which === 83){
    gunSound.play();
    $(".smoke").css("width", "5vw");
    $(".smoke").css("border-radius", "50%");
    $(".smoke").css("box-shadow", "0px 0px 100px 10px orange");
    $(".bullet1").animate({left: "-=100vw"});
    //checkRedBalloon();
    setTimeout(checkRedBalloon, 300);
   }

  // L to shoot the bullet
   if(e.which === 76){
    $(".bullet1").css("display", "none");
    $(".bullet1").css("left", "+=100vw");
    $(".bullet1").css("display", "inline-block");
   }

    function checkRedBalloon(){
      bullet1Position = $(".bullet1").position();
      bullet1XPosition = bullet1Position.left;
      bullet1YPosition = bullet1Position.top;
      boxPosition = $(".box").position();
      boxXPosition = boxPosition.left;
      boxYPosition = boxPosition.top + 5;
      $(".smoke").css("box-shadow", "0 0 0 0");
         /* When red balloon is hit */
      if (redBalloonYPosition > boxYPosition){
        redHit = redHit;
        glassSound.play();
      } else if((redBalloonXPosition + redBalloonWidth) >= bullet1XPosition && (boxYPosition - redBalloonYPosition) <= redBalloonHeight) {
        $(".redBalloon").css("border-radius", "70%");
        $(".redBalloon").css("box-shadow", "5px 5px 100px 10px yellow");
        crushSound.play();
        $(".redBalloon").fadeOut(1000);
        redHit++;
        score++;
       $(".score").text(score);
      }
      setTimeout(showNewBalloon, 1000);
    }

    function showNewBalloon(){
      var newLocation = Math.random() * 500;
      var newSize = Math.random() * 100;
      redBalloonYPosition = newLocation;
      redBalloonHeight = newSize;
      $(".redBalloon").css("top", newLocation); 
      $(".redBalloon img").css("height", newSize);
      $(".redBalloon img").css("width", newSize);
      $(".redBalloon").fadeIn();
      $(".bullet1").css("display", "none");
      $(".bullet1").css("left", "+=100vw");
      $(".bullet1").css("display", "inline-block");
      $(".redBalloon").css("box-shadow", "0 0 0 0");
    }

    $(".close").on("click", function(){
      location.reload();
    })

	}); // End of game loop