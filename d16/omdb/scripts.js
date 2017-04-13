console.log("jQuery is running");

	var myArray = [];

$(".btn").on("click", function(movie){
	console.log("button clicked");
	var movie = $(".myTitle").val();
	console.log(movie);


	var myJson = $.getJSON("http://omdbapi.com/?t=" + movie, function(data){
	console.log(data);


	
  console.log(myTitle);
	var titleAndRating = data["Title"] + " (" + data["Rated"] + ")";
  var myTitle = data["Title"];
	var myYear = data["Year"];
	var myPoster = data["Poster"];
	var myPlot = data["Plot"];

	$(".title").text(titleAndRating);
	$("h4").text(myYear);
	$(".poster").attr("src",myPoster);
	$(".plot").text(myPlot);

	var list = $(".search-history");
	var myAdd = $("<li>" + movie + "</li>");
	$("ul").append(myAdd);

	myArray.push(myTitle);
	
	console.log(myArray);
// -------- Storing data in localStorage ------ //
	localStorage.setItem("list", JSON.stringify(myArray));
	console.log(localStorage.getItem("list"));
	})
// -------- End of Storage in localStorage ---- //


})


for (var i in localStorage){
	console.log(localStorage[i]);
}

for (var i in ["list"]){
	console.log(["list"]);
}

	console.log(localStorage.getItem("list"));
	console.log(localStorage.getItem(["list"][0]));


	
var theArray = JSON.parse(localStorage.getItem("list"))
	console.log(theArray[0]);
	console.log(theArray[1]);
	console.log(theArray[2]);


// --------- Retrieving data from localStorage ----- //
for (i in theArray){
	var myAdd = $("<li>" + theArray[i] + "</li>");
$("ul").append(myAdd);
}
// --------- End of Retrieving data from localStorage ---//

/*
var myAdd = $("<li>" + theArray[0] + "</li>");
$("ul").append(myAdd);
var myAdd = $("<li>" + theArray[1] + "</li>");
$("ul").append(myAdd);
var myAdd = $("<li>" + theArray[2] + "</li>");
$("ul").append(myAdd);
*/


/*
$("ul").on("click", function(event){
	// var mytarget = "http://omdbapi.com/?t=" + $(event.target);
	var title = $(event.target).text();
	$.getJSON("http://omdbapi.com/?t=" + title);
	
})

JSON.stringify(names)


var storedNames = JSON.parse(localStorage.getItem("names"))

	 $(".setBtn").on("click", function(){
 	var myfirstname = $(".firstname").val();
 	localStorage.setItem("firstname", myfirstname);
 	$(".getFirstname").text(localStorage.getItem("firstname"));
 })

*/





/*
var myJason = "http://api.openweathermap.org/data/2.5/weather?q=" + myCity + "&units=imperial&appid=ecebc374332b3f8eaccc3e55f0be1094";
	// console.log(myJason);
	console.log($.getJSON(myJason));
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + myCity + "&units=imperial&appid=ecebc374332b3f8eaccc3e55f0be1094", function(data){
	console.log(data);


		var myTemp = data["main"]["temp"];
	var myIcon = data["weather"][0]["icon"];
	var iconTitle = "http://openweathermap.org/img/w/" + myIcon + ".png"
	console.log(myTemp);
	$(".temperature").text(myTemp);
	$(".icon").attr("src", iconTitle);
*/
