$("button").on("click", function(){
	console.log("I WAS CLICKED");
});

/*
$("button").on("click", function(){
	var myinput = $("input").val();
	$("h1").text(myinput);
	$("input").val("");
});
*/
buttonClick = false;
$("button").on("click", function(){
	if (buttonClick === false) {
	$(".list").css("display", "none");
	buttonClick = true;
} else {
	$(".list").css("display", "block");
	buttonClick = false;
}

});
