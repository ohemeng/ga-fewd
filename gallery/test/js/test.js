console.log("test has started");

function myFunction(x) {
    x.classList.toggle("change");
}

$(".container").on("click", function(){

	$(".mobileMenu").toggleClass("showMobileMenu");
})

var points = 0;

$(".q9a, .q9b, .q9c").is(":checked")== false;

$(".btn").on("click", function(){

// Question 1
	if($(".q1a").is(":checked")){
		$(".ans-q1a").css("background-color", "red");
	}
	if ($(".q1b").is(":checked")){
			$(".ans-q1b").css("background-color", "lightgreen");
			points++;
			}else{
				$(".ans-q1b").css("background-color", "orange");
			}
	if ($(".q1c").is(":checked")){
			$(".ans-q1c").css("background-color", "red");
		}
	if ($(".q1d").is(":checked")){
			$(".ans-q1d").css("background-color", "red");
		}
	if ($(".q1e").is(":checked")){
			$(".ans-q1e").css("background-color", "red");
	}

// Question 2
	if($(".q2a").is(":checked")){
		$(".ans-q2a").css("background-color", "lightgreen");
	} else{
				$(".ans-q2a").css("background-color", "orange");
	}

	if ($(".q2b").is(":checked")){
			$(".ans-q2b").css("background-color", "lightgreen");
	}else{
				$(".ans-q2b").css("background-color", "orange");
	}
	if ($(".q2c").is(":checked")){
			$(".ans-q2c").css("background-color", "lightgreen");
	}else{
				$(".ans-q2c").css("background-color", "orange");
	}
	if ($(".q2d").is(":checked")){
			$(".ans-q2d").css("background-color", "lightgreen");
	}else{
				$(".ans-q2d").css("background-color", "orange");
	}
	if ($(".q2e").is(":checked")){
			$(".ans-q2e").css("background-color", "red");
	}

	if ($(".q2a" && ".q2b" && ".q2c" && ".q2d").is(":checked") == true && $(".q2e").is(":checked")== false){
		points++;
	}
// Question 3
		if($(".q3a").is(":checked")){
		$(".ans-q3a").css("background-color", "lightgreen");
	}else{
				$(".ans-q3a").css("background-color", "orange");
	}
	if ($(".q3b").is(":checked")){
			$(".ans-q3b").css("background-color", "lightgreen");
	}else{
				$(".ans-q3b").css("background-color", "orange");
	}
	if ($(".q3c").is(":checked")){
			$(".ans-q3c").css("background-color", "lightgreen");
	}else{
				$(".ans-q3c").css("background-color", "orange");
	}
	if ($(".q3d").is(":checked")){
			$(".ans-q3d").css("background-color", "red");
	}
	if ($(".q3e").is(":checked")){
			$(".ans-q3e").css("background-color", "lightgreen");
	}else{
				$(".ans-q3e").css("background-color", "orange");
	}
		if ($(".q3a" &&  ".q3b" && ".q3c" && ".q3e").is(":checked") == true && $(".q3d").is(":checked")== false){
		points++;
	}

// Question 4
	if ($(".q4a").is(":checked")){
			$(".ans-q4a").css("background-color", "red");
	}
	if ($(".q4b").is(":checked")){
			$(".ans-q4b").css("background-color", "lightgreen");
	} else{
				$(".ans-q4b").css("background-color", "orange");
	}
	if ($(".q4c").is(":checked")){
			$(".ans-q4c").css("background-color", "lightgreen");
	}else{
				$(".ans-q4c").css("background-color", "orange");
	}
	if ($(".q4d").is(":checked")){
			$(".ans-q4d").css("background-color", "lightgreen");
	}else{
				$(".ans-q4d").css("background-color", "orange");
	}
	if ($(".q4e").is(":checked")){
			$(".ans-q4e").css("background-color", "red");
	}
		if ($(".q4b" && ".q4c" && ".q4d").is(":checked") == true && ($(".q4a" && ".q4e").is(":checked")== false)){
		points++;
	}

// Question 5
	if ($(".q5a").is(":checked")){
			$(".ans-q5a").css("background-color", "red");
	}
	if ($(".q5b").is(":checked")){
			$(".ans-q5b").css("background-color", "red");
	}
	if ($(".q5c").is(":checked")){
			$(".ans-q5c").css("background-color", "lightgreen");
	}else{
				$(".ans-q5c").css("background-color", "orange");
	}
	if ($(".q5d").is(":checked")){
			$(".ans-q5d").css("background-color", "red");
	}
	if ($(".q5e").is(":checked")){
			$(".ans-q5e").css("background-color", "red");
	}

	if ($(".q5c").is(":checked") == true && $(".q5a" && ".q5b" && ".q5d" && ".q5e").is(":checked")== false){
		points++;
	}

	// Question 6
	if ($(".q6a").is(":checked")){
			$(".ans-q6a").css("background-color", "red");
	} 
	if ($(".q6b").is(":checked")){
			$(".ans-q6b").css("background-color", "lightgreen");
			points++;
	} else{
				$(".ans-q6b").css("background-color", "orange");
			}
	if ($(".q6c").is(":checked")){
			$(".ans-q6c").css("background-color", "red");
	}
	if ($(".q6d").is(":checked")){
			$(".ans-q6d").css("background-color", "red");
	}

		// Question 7
	if ($(".q7a").is(":checked")){
			$(".ans-q7a").css("background-color", "lightgreen");
			points++;
	}else{
				$(".ans-q7a").css("background-color", "orange");
	}
	if ($(".q7b").is(":checked")){
			$(".ans-q7b").css("background-color", "red");
	} 
	if ($(".q7c").is(":checked")){
			$(".ans-q7c").css("background-color", "red");
	} 
	if ($(".q7d").is(":checked")){
			$(".ans-q7d").css("background-color", "red");
	}

			// Question 8
	if ($(".q8a").is(":checked")){
			$(".ans-q8a").css("background-color", "red");
	}
	if ($(".q8b").is(":checked")){
			$(".ans-q8b").css("background-color", "red");
	}
	if ($(".q8c").is(":checked")){
			$(".ans-q8c").css("background-color", "red");
	} 
	if ($(".q8d").is(":checked")){
			$(".ans-q8d").css("background-color", "lightgreen");
			points++;
	}else{
				$(".ans-q8d").css("background-color", "orange");
	}

			// Question 9
	if ($(".q9a").is(":checked")){
			$(".ans-q9a").css("background-color", "lightgreen");
	}else{
				$(".ans-q9a").css("background-color", "orange");
	}
	if ($(".q9b").is(":checked")){
			$(".ans-q9b").css("background-color", "lightgreen");
	}else{
				$(".ans-q9b").css("background-color", "orange");
	}
	if ($(".q9c").is(":checked")){
			$(".ans-q9c").css("background-color", "lightgreen");
	}else{
				$(".ans-q9c").css("background-color", "orange");
	}
	if ($(".q9d").is(":checked")){
			$(".ans-q9d").css("background-color", "red");
	}

//	if ($(".q9a").is(":checked") && $(".q9b").is(":checked")&& $(".q9c").is(":checked") 	&& ($(".q9d").is(":checked")== false)){
	if($(".q9a" && ".q9b" && ".q9c").is(":checked") && ($(".q9d").is(":checked")== false) ){
		points++;
	}

				// Question 10
	if ($(".q10a").is(":checked")){
			$(".ans-q10a").css("background-color", "red");
	}
	if ($(".q10b").is(":checked")){
			$(".ans-q10b").css("background-color", "red");
	}
	if ($(".q10c").is(":checked")){
			$(".ans-q10c").css("background-color", "lightgreen");
			points++;
	}else{
				$(".ans-q10c").css("background-color", "orange");
	}
	if ($(".q10d").is(":checked")){
			$(".ans-q10d").css("background-color", "red");
	}


	$(".correctAns").html("You got " + points + " correct");

	$(".legend").css("display", "block");

})