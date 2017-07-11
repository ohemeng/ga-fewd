console.log("jQuery has started");

var player = "playerx";
var pieceClass = "xpiece";
var count = 0;
var win = 0;
var playerXScore = 0;
var playerOScore = 0;

var playSound = new Audio("wav/win.wav");


function play(player, pieceClass){

	$(".a1").on("click", function(){
	if($(".a1").hasClass("xpiece") || $(".a1").hasClass("opiece")){
		alert("Already selected! You lost your turn");
		$("a1").removeClass(pieceClass);
	}else{

	$(".a1").addClass(pieceClass);
	checkWin(player);
	}

			if (player === "playerx"){
				player = "playero";
				pieceClass = "opiece";
			} else {
				player = "playerx";
				pieceClass = "xpiece";
			}	
	})

	$(".a2").on("click", function(){
	if($(".a2").hasClass("xpiece") || $(".a2").hasClass("opiece")){
		alert("Already selected! You lost your turn");
		$("a2").removeClass(pieceClass);
	}else{
	$(".a2").addClass(pieceClass);
	checkWin(player);
}
			if (player === "playerx"){
				player = "playero";
				pieceClass = "opiece";
			} else {
				player = "playerx";
				pieceClass = "xpiece";
			}	
	})

	$(".a3").on("click", function(){
	if($(".a3").hasClass("xpiece") || $(".a3").hasClass("opiece")){
		alert("Already selected! You lost your turn");
		$("a3").removeClass(pieceClass);
	}else{
	$(".a3").addClass(pieceClass);
	checkWin(player);
}
			if (player === "playerx"){
				player = "playero";
				pieceClass = "opiece";
			} else {
				player = "playerx";
				pieceClass = "xpiece";
			}	
	})

	$(".b1").on("click", function(){
	if($(".b1").hasClass("xpiece") || $(".b1").hasClass("opiece")){
		alert("Already selected! You lost your turn");
		$("b1").removeClass(pieceClass);
	}else{
	$(".b1").addClass(pieceClass);
	checkWin(player);
}
			if (player === "playerx"){
				player = "playero";
				pieceClass = "opiece";
			} else {
				player = "playerx";
				pieceClass = "xpiece";
			}	
	})

	$(".b2").on("click", function(){
	if($(".b2").hasClass("xpiece") || $(".b2").hasClass("opiece")){
		alert("Already selected! You lost your turn");
		$("b2").removeClass(pieceClass);
	}else{
	$(".b2").addClass(pieceClass);
	checkWin(player);
}
			if (player === "playerx"){
				player = "playero";
				pieceClass = "opiece";
			} else {
				player = "playerx";
				pieceClass = "xpiece";
			}	
	})

	$(".b3").on("click", function(){
	if($(".b3").hasClass("xpiece") || $(".b3").hasClass("opiece")){
		alert("Already selected! You lost your turn");
		$("b3").removeClass(pieceClass);
	}else{
	$(".b3").addClass(pieceClass);
	checkWin(player);
	}
			if (player === "playerx"){
				player = "playero";
				pieceClass = "opiece";
			} else {
				player = "playerx";
				pieceClass = "xpiece";
			}	
	})

	$(".c1").on("click", function(){
	if($(".c1").hasClass("xpiece") || $(".c1").hasClass("opiece")){
		alert("Already selected! You lost your turn");
		$("c1").removeClass(pieceClass);
	}else{
	$(".c1").addClass(pieceClass);
	checkWin(player);
	}
			if (player === "playerx"){
				player = "playero";
				pieceClass = "opiece";
			} else {
				player = "playerx";
				pieceClass = "xpiece";
			}	
	})

	$(".c2").on("click", function(){
	if($(".c2").hasClass("xpiece") || $(".c2").hasClass("opiece")){
		alert("Already selected! You lost your turn");
		$("c2").removeClass(pieceClass);
	}else{
	$(".c2").addClass(pieceClass);
	checkWin(player);
	}
			if (player === "playerx"){
				player = "playero";
				pieceClass = "opiece";
			} else {
				player = "playerx";
				pieceClass = "xpiece";
			}	
	})

	$(".c3").on("click", function(){
	if($(".c3").hasClass("xpiece") || $(".c3").hasClass("opiece")){
		alert("Already selected! You lost your turn");
		$("c3").removeClass(pieceClass);
	}else{
	$(".c3").addClass(pieceClass);
	checkWin(player);
	}
			if (player === "playerx"){
				player = "playero";
				pieceClass = "opiece";
			} else {
				player = "playerx";
				pieceClass = "xpiece";
			}	
	})

}


function showModal(){
	 		$('.modal').modal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
    });
}


function checkWin(player){
	// --------------------Check for X win --------------
	if ($(".a1").hasClass("xpiece") && $(".b1").hasClass("xpiece") && $(".c1").hasClass("xpiece") ){
		showModalWin();
	}
	if ($(".a2").hasClass("xpiece") && $(".b2").hasClass("xpiece") && $(".c2").hasClass("xpiece") ){
		showModalWin();
	}
	
	if ($(".a3").hasClass("xpiece") && $(".b3").hasClass("xpiece") && $(".c3").hasClass("xpiece") ){
		showModalWin();
	}
	if ($(".a1").hasClass("xpiece") && $(".a2").hasClass("xpiece") && $(".a3").hasClass("xpiece") ){
		showModalWin();
	}
	if ($(".b1").hasClass("xpiece") && $(".b2").hasClass("xpiece") && $(".b3").hasClass("xpiece") ){
		showModalWin();
	}
	if ($(".c1").hasClass("xpiece") && $(".c2").hasClass("xpiece") && $(".c3").hasClass("xpiece") ){
		showModalWin();
	}
	if ($(".a1").hasClass("xpiece") && $(".b2").hasClass("xpiece") && $(".c3").hasClass("xpiece") ){
		showModalWin();
	}
	if ($(".a3").hasClass("xpiece") && $(".b2").hasClass("xpiece") && $(".c1").hasClass("xpiece") ){
		showModalWin();
	}

	// ------------ Check for O win --------------------
	if ($(".a1").hasClass("opiece") && $(".b1").hasClass("opiece") && $(".c1").hasClass("opiece") ){
		showModalWin();
	}
	if ($(".a2").hasClass("opiece") && $(".b2").hasClass("opiece") && $(".c2").hasClass("opiece") ){
		showModalWin();
	}
	if ($(".a3").hasClass("opiece") && $(".b3").hasClass("opiece") && $(".c3").hasClass("opiece") ){
		showModalWin();
	}
	if ($(".a1").hasClass("opiece") && $(".a2").hasClass("opiece") && $(".a3").hasClass("opiece") ){
		showModalWin();
	}
	if ($(".b1").hasClass("opiece") && $(".b2").hasClass("opiece") && $(".b3").hasClass("opiece") ){
		showModalWin();
	}
	if ($(".c1").hasClass("opiece") && $(".c2").hasClass("opiece") && $(".c3").hasClass("opiece") ){
		showModalWin();
	}
	if ($(".a1").hasClass("opiece") && $(".b2").hasClass("opiece") && $(".c3").hasClass("opiece") ){
		showModalWin();
	}
	if ($(".a3").hasClass("opiece") && $(".b2").hasClass("opiece") && $(".c1").hasClass("opiece") ){
		showModalWin();
	}
	count++
	console.log(count);
		if(count === 9 && win === 0){
		showModal('open');
		$("#modalTie").modal("open");
	}

	function showModalWin() {
		if(player === "playerx"){
			player = "X";
			playerXScore = playerXScore + 1;
			$(".playerXScore").text(playerXScore)
		} 
		if (player === "playero"){
			player = "O";
			playerOScore = playerOScore + 1;
			$(".playerOScore").text(playerOScore)
		}
			$(".player").text("Player "+ player );
			showModal('open');
			$("#modalWon").modal("open");
			win = 1;
			playSound.play();
		//	count = 0;
	}

}

$(".playAgain").on("click", function(){
	location.reload();
})



$(".done").on("click", function(){
	$(".piece").removeClass("xpiece");
	$(".piece").removeClass("opiece");
	count = 0;
	win = 0;
})

$(".modalWon").on("click", function(){
 		$('.modal').modal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
    }); 
 //   showModal();
 });


play(player, pieceClass);



