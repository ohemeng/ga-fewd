var ny = {
  name: "New York",
  capital: "Albany",
  governor: "Andrew Cuomo",
  usSenators: ["Chuck Schumer", "Kirsten Gillibrand"]
}

var ct = {
  name: "Connecticut",
  capital: "Hartford",
  governor: "Dannel Malloy",
  usSenators: ["Richard Blumenthal", "Christopher S. Murphy"]
}


$("#ct").on("click", function(){
	$("h1").text(ct["name"]);
	$(".capital").text(ct["capital"]);
	$(".governor").text(ct["governor"]);
	$("#first-senator").text(ct["usSenators"][0]);
	$("#second-senator").text(ct["usSenators"][1]);

})


$("#ny").on("click", function() {
	$("h1").text(ny["name"]);
	$(".capital").text(ny["capital"]);
	$(".governor").text(ny["governor"]);
	$("#first-senator").text(ny["usSenators"][0]);
	$("#second-senator").text(ny["usSenators"][1]);
})

/*
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London,UK&units=imperial&appid=ecebc374332b3f8eaccc3e55f0be1094", function(data){
	console.log(data);
	var mydata = data;

})
*/

$(".myButton").on("click", function() {
	console.log("button clicked");
	var myCity = $("input").text();
	console.log(myCity);

});
