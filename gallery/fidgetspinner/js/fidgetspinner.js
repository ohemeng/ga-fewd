var spinningSound = new Audio("wav/spinning.m4a");
console.log("current time "+ spinningSound.currentTime);

function stopSound(){
	spinningSound.pause();
}

function playSound(){
	return spinningSound.play();
}

$(".speakerOn").toggleClass("speakerOff");
spinningSound.pause();


$(".spinner, .btn").on("click", function(){
	if($(".speaker").hasClass("speakerOff")){
		spinningSound.pause();
	} else {
		console.log("Playing at "+ spinningSound.currentTime);
		spinningSound.currentTime = 0.5;
		// setTimeout(function(){spinningSound.play()}, 150);
		spinningSound.play();
		// setTimeout(stopSound, 20000);  // stop sound in 20s
	}
	$(".spinner").toggleClass("startSpin");
		if($(".checkSpinner").hasClass("startSpin") === false){
			spinningSound.pause();
			console.log("Paused at "+ spinningSound.currentTime);
			// spinningSound.currentTime = 0;
		}

})

$(".selection").change(function(){
	var spinner = $(".selection").val();
	var newImage = "url(img/" + spinner + "spinner.png)";
	$(".spinner").css("background-image", newImage);
	console.log(newImage);

})

$(".speakerOn").on("click", function(){
	$(".speakerOn").toggleClass("speakerOff");
	if($(".speaker").hasClass("speakerOff")){
		spinningSound.pause();
	}else if($(".checkSpinner").hasClass("startSpin") === true){
		// spinningSound.currentTime = 0;
		spinningSound.play();
		setTimeout(stopSound, 20000);  //stop sound in 20s
	}
})

