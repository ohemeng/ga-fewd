$("a#color-button").on("click", function(){
	console.log("this button was press");
	
/*
	var myred = $("input#red").val();
	console.log(myred);
	var mygreen = $("input#green").val();
	console.log(mygreen);
	var myblue = $("input#blue").val();
	console.log(myblue);


	var mycolor = "rgb"+"(" + myred + "," + mygreen + "," + myblue + ")";
	console.log(mycolor);

	$("div#wrapper").css("background-color", mycolor);

*/

// Using random colors
	var myred = Math.floor(Math.random()*255);
	console.log(myred);
	var mygreen = Math.floor(Math.random()*255);
	console.log(mygreen);
	var myblue = Math.floor(Math.random()*255);
	console.log(myblue);
var mycolor = "rgb"+"(" + myred + "," + mygreen + "," + myblue + ")";

$("div#wrapper").css("background-color", mycolor);

});

/*
	$("div#wrapper").css("background-color", "rgb(0, 11, 111)");	

	*/