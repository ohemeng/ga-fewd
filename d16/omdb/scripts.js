console.log("jQuery is running");



$(".btn").on("click", function(movie){
	console.log("button clicked");
	var movie = $(".myTitle").val();
	console.log(movie);

	var aHref = "http://omdbapi.com/?t=" + movie;
	var newHref = " + aHref + ";

	var myJson = $.getJSON("http://omdbapi.com/?t=" + movie, function(data){
	console.log(data);

	console.log(myTitle);
	var myTitle = data["Title"];
	var myYear = data["Year"];
	var myPoster = data["Poster"];
	var myPlot = data["Plot"];


	


	$(".title").text(myTitle);
	$("h4").text(myYear);
	$(".poster").attr("src",myPoster);
	$(".plot").text(myPlot);

//	var list = $(".search-history");
//	var myAdd = $("<li><a href=\"aHref\">" + movie + "</a></li>");
//	$("ul").append(myAdd);
	

	})

})

$("ul").on("click", function(event){
	// var mytarget = "http://omdbapi.com/?t=" + $(event.target);
	var title = $(event.target).text();
	$.getJSON("http://omdbapi.com/?t=" + title);
	
})









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
