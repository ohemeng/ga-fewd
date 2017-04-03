console.log("jQuery has started");

// Click sign-in to pop-up modal
$(".signIn").on("click", function(){
	$("body").css("background-color", "rgba(0,0,0,0.65)");
	$(".modal").fadeIn();
	//$(".modal").css("display", "block");
	console.log("clicked sign In");
})

// Click cancel to dismiss modal
	$(".btn2").on("click", function(){
		$(".modal").fadeOut();
		//$(".modal").css("display", "none");
		$("body").css("background-color", "rgba(255,255,255,1)");
	})

