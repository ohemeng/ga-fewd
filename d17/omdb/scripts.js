console.log("jquery is running");
var movies = [];

$(".search").on("click", function() {
  console.log("search was clicked");
  var title = $("input").val();
  $.getJSON("http://omdbapi.com/?t=" + title, function(monkey){
    var titleAndRating = monkey["Title"] + " (" + monkey["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(monkey["Year"]);
    $(".poster").attr("src", monkey["Poster"]);
    $(".plot").text(monkey["Plot"]);
   // $(".tRating").text(monkey["Rating"][1]["Value"]);

    var li = $("<li>" + monkey["Title"] + "</li>");
    $("ul.search-history").append(li);

    var stashedMovie = {
      title: monkey["Title"],
      score: monkey["Ratings"][1]["Value"],
      rated: monkey["Rated"]
    }

    movies.push(stashedMovie);

  });
});

$("ul").on("click", function(event) {
  var title = $(event.target).text();

  $.getJSON("http://omdbapi.com/?t=" + title, function(data) {
    var titleAndRating = data["Title"] + " (" + data["Rated"] + ")";
    $(".title").text(titleAndRating);
    $(".year").text(data["Year"]);
    $(".poster").attr("src", data["Poster"]);
    $(".plot").text(data["Plot"]);
  });
})



// get rid of all the bad movies
// * search through the array
// * for each movie that meets our criteria
// * insert it into the DOM


$("button.filter").on("click", function(){
  $("ul").children().remove();


  var index = 0;
  while (index < movies.length){
    var scoreAsInt = parseInt(movies[index]["score"]);
    if (scoreAsInt > 50) {
      var li = $("<li>" + movies[index]["title"] + "</li>");
      $("ul.search-history").append(li);
    }
  index = index + 1;
}

})


// ----- Check for Good Movies ------

$(".goodMovies").on("click", function(){
  console.log("show all movies clicked");
  $("ul").children().remove();
  console.log("children removed");
  console.log(movies);
  var index = 0;
  
  while (index < movies.length){
    if($(".goodMovies").is(":checked")){
      var scoreAsInt = parseInt(movies[index]["score"]);
        if (scoreAsInt > 50) {
        var li = $("<li>" + movies[index]["title"] + "</li>");
        $("ul.search-history").append(li);
        };
    }
    else{
      var li = $("<li>" + movies[index]["title"] + "</li>");
      $("ul.search-history").append(li);
    }
    
    index = index + 1;
  }

})

$(".rMovies").on("click", function(){
  console.log(movies);


    if($(".rMovies").is(":checked")){
      $("ul").children().remove();
      movies.forEach(function(aSingleMovie){
        if(aSingleMovie["rated"] != "R"){
          var li = $("<li>" + aSingleMovie["title"] + "</li>");
          $("ul.search-history").append(li);
          }
      })
    }else{
      $("ul").children().remove();
      movies.forEach(function(aSingleMovie){
        var li = $("<li>" + aSingleMovie["title"] + "</li>");
        $("ul.search-history").append(li);
      })
   }
 
})


// ------ End of Good Movies ----- 






/*
$(".goodMovies").on("click", function(){
  console.log("checked");
  $("ul").children().remove();
  console.log("children removed");
  console.log(movies);
    var index = 0;
  while (index < movies.length){
      var li = $("<li>" + movies[index]["title"] + "</li>");
      $("ul.search-history").append(li);
      index = index + 1;
    }
  
})

*/


/*

movies.forEach(function(aSingleMovie){
  var scoreAsInt = parseInt(aSingleMovie["score"])
  if (scoreAsInt > 50){
    var li = $("<li>" + aSingleMovie["title"] + "</li>");
    $("ul.search-history").append(li); 
  }
})
*/





