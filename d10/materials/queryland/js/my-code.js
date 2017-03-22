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

$("button").on("click", function(){
	$(".list").style.display = none;
});
