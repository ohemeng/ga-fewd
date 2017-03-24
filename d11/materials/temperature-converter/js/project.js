console.log("jquery is running");

/*
$("button.convertbtn").on("click", function(){
	console.log("button is clicked");
	var celcius = $("input").val();
	var fahrenheit = parseInt(celcius) * 9 / 5 + 32;

	$("span#converted").text(fahrenheit);
	$("input").val("");
});
*/

var isClicked = false;

$("button#dropbtn").on("click", function(){
	if (isClicked === false){
	console.log("dropdown clicked");
	$("div#selection").css("display", "block");
	isClicked = true;
} else {
	$("div#selection").css("display", "none");
	isClicked = false;
}
});

$("#celsius").on("click", function(){
	var celcius = $("input").val();
	var fahrenheit = parseInt(celcius) * 9 / 5 + 32;

	$("span#converted").text(fahrenheit);
	$("span#units").text("fahrenheit");
	$("span#convertunit").text("celsius");
});


$("#fahrenheit").on("click", function(){
	var fahrenheit = $("input").val();
	var celsius = (parseInt(fahrenheit) - 32) * 5 / 9;

	$("span#converted").text(celsius);
	$("span#units").text("celsius");
	$("span#convertunit").text("fahrenheit");
	
});