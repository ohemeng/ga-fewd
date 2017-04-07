/*
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,UK&units=imperial&appid=ecebc374332b3f8eaccc3e55f0be1094", function(data){
	console.log(data);
	var mydata = data;

})
*/

$(".myButton").on("click", function() {
	console.log("button clicked");
	var myCity = $("#theCity").val();
	console.log(myCity);

	var myJason = "http://api.openweathermap.org/data/2.5/weather?q=" + myCity + "&units=imperial&appid=ecebc374332b3f8eaccc3e55f0be1094";
	// console.log(myJason);
	console.log($.getJSON(myJason));
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + myCity + "&units=imperial&appid=ecebc374332b3f8eaccc3e55f0be1094", function(data){
	console.log(data);
	// var myInfo = $.getJSON(myJason);
	var myTemp = data["main"]["temp"];
	var myIcon = data["weather"][0]["icon"];
	var iconTitle = "http://openweathermap.org/img/w/" + myIcon + ".png"
	console.log(myTemp);
	$(".temperature").text(myTemp);
	$(".icon").attr("src", iconTitle);

	})
})

