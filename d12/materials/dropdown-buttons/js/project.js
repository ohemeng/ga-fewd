console.log("jQuery is running");

var fDropdown = false;
var eDropdown = false;

$(".file").on("click", function(){
	console.log("clicked file");
	if (fDropdown === false){
		$(".fileOpen").css("display", "block");
		$(".open").css("display", "block");
		$(".save").css("display", "block");
	  $(".editOpen").css("display", "none");
		fDropdown = true;
	} else if (fDropdown === true){
		$(".fileOpen").css("display", "none");
		$(".open").css("display", "none");
		$(".save").css("display", "none");
		fDropdown = false;
	}
})

$(".file").mouseover(function(){
	$(".file").css("background-color", "blue");

})

$(".file").mouseleave(function(){
	$(".file").css("background-color", "white");
})


	$(".edit").on("click", function(){
		if (eDropdown === false){
			console.log("clicked file");
			$(".editOpen").css("display", "block");
			$(".editOpen").css("margin-left", "105px");
			$(".cut").css("display", "block");
			$(".copy").css("display", "block");
			$(".fileOpen").css("display", "none");
			eDropdown = true;
		} else if (eDropdown === true){
			$(".editOpen").css("display", "none");
			$(".cut").css("display", "none");
			$(".copy").css("display", "none");
			eDropdown = false;
		}
	})


$(".edit").mouseover(function(){
	$(".edit").css("background-color", "blue");

})

$(".edit").mouseleave(function(){
	$(".edit").css("background-color", "white");
})

/*
$("body").on("click", function(){
		$(".fileOpen").css("display", "none");
		$(".open").css("display", "none");
		$(".save").css("display", "none");
		fDropdown = false;
})
*/

// $("figure img").attr("src", "img/2.jpg");