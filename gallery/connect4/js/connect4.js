var r;
var c;
var red = 1;
var blue = 0;
var winSound = new Audio("wav/win.wav");
var arrayA = ["a6", "a5", "a4", "a3", "a2", "a1"];
var arrayB = ["b6", "b5", "b4", "b3", "b2", "b1"];
var arrayC = ["c6", "c5", "c4", "c3", "c2", "c1"];
var arrayD = ["d6", "d5", "d4", "d3", "d2", "d1"];
var arrayE = ["e6", "e5", "e4", "e3", "e2", "e1"];
var arrayF = ["f6", "f5", "f4", "f3", "f2", "f1"];
var arrayG = ["g6", "g5", "g4", "g3", "g2", "g1"];


var x =[ 	["a6", "a5", "a4", "a3", "a2", "a1"],
					["b6", "b5", "b4", "b3", "b2", "b1"],
					["c6", "c5", "c4", "c3", "c2", "c1"],
					["d6", "d5", "d4", "d3", "d2", "d1"],
					["e6", "e5", "e4", "e3", "e2", "e1"],
					["f6", "f5", "f4", "f3", "f2", "f1"],
					["g6", "g5", "g4", "g3", "g2", "g1"] ];

/*
var x =[ 	["a1", "b1", "c1", "d1", "e1", "f1", "g1"],
					["a2", "b2", "c2", "d2", "e2", "f2", "g2"],
					["a3", "b3", "c3", "d3", "e3", "f3", "g3"],
					["a4", "b4", "c4", "d4", "e4", "f4", "g4"],
					["a5", "b5", "c5", "d5", "e5", "f5", "g5"],
					["a6", "b6", "c6", "d6", "e6", "f6", "g6"] ];
*/



var nextPosition;

var player = "redpiece";

$(".redpiece").css("top", $(".a").position().top)
$(".redpiece").css("margin-top", 1 + "vw");

$(".bluepiece").css("display", "none");

$(document).mousemove(function(event){
  $(".redpiece").css("left", event.pageX - 30);
});

$(".redpiece").mousedown(function(){
	checkposition();
	var newPosition =  $("."+ nextPosition).position().top;
	$(".redpiece").animate({top: newPosition});
	$(".redpiece").css("opacity", "0.6");
	setTimeout(passTurn, 500);
	updateXForRed(nextPosition);
	updateArray();
	chkWinner(x);
	console.log("SELECTED THIS "+ nextPosition);	
})

$(".bluepiece").on("click", function(){
	checkposition();
	var newPosition =  $("."+ nextPosition).position().top;
	$(".bluepiece").animate({top: newPosition});
	$(".bluepiece").css("opacity", "0.6");
	setTimeout(passTurn, 500);
	updateXForBlue(nextPosition);
	updateArray();
	chkWinner(x);	
})

function checkposition(){
	if ($("."+ player).position().left < $(".b1").position().left){
		isColumnFull(arrayA);
		aPosition = arrayA[0];
		console.log(arrayA);
		nextPosition = aPosition;
		return nextPosition;
	}
	if ($("."+ player).position().left > $(".b1").position().left && $("."+ player).position().left <= $(".c1").position().left){
		isColumnFull(arrayB);
		bPosition = arrayB[0];
		console.log(arrayB);
		nextPosition = bPosition;
		return nextPosition;
	}
	if ($("."+ player).position().left > $(".c1").position().left && $("."+ player).position().left <= $(".d1").position().left){
		isColumnFull(arrayC);
		cPosition = arrayC[0];
		console.log(arrayC);
		nextPosition = cPosition;
		return nextPosition;
	}
	if ($("."+ player).position().left > $(".d1").position().left && $("."+ player).position().left <= $(".e1").position().left){
		isColumnFull(arrayD);
		dPosition = arrayD[0];
		console.log(arrayD);
		nextPosition = dPosition;
		return nextPosition;
	}
	if ($("."+ player).position().left > $(".e1").position().left && $("."+ player).position().left <= $(".f1").position().left){
		isColumnFull(arrayE);
		ePosition = arrayE[0];
		console.log(arrayE);
		nextPosition = ePosition;
		return nextPosition;
	}
	if ($("."+ player).position().left > $(".f1").position().left && $("."+ player).position().left <= $(".g1").position().left){
		isColumnFull(arrayF);
		fPosition = arrayF[0];
		console.log(arrayF);
		nextPosition = fPosition;
		return nextPosition;
	}
	if ($("."+ player).position().left > $(".g1").position().left){
		isColumnFull(arrayG);
		gPosition = arrayG[0];
		console.log(arrayG);
		nextPosition = gPosition;
		return nextPosition;
	}
}

function updateArray(){
	if ($("."+ player).position().left < $(".b1").position().left){
		if (arrayA.length >=1){
			arrayA.shift();
		}
	}
	if ($("."+ player).position().left > $(".b1").position().left && $("."+ player).position().left <= $(".c1").position().left){
		if (arrayB.length >=1){
			arrayB.shift();
		}
	}
	if ($("."+ player).position().left > $(".c1").position().left && $("."+ player).position().left <= $(".d1").position().left){
		if (arrayC.length >=1){
			arrayC.shift();
		}
	}
	if ($("."+ player).position().left > $(".d1").position().left && $("."+ player).position().left <= $(".e1").position().left){
		if (arrayD.length >=1){
			arrayD.shift();
		}
	}
	if ($("."+ player).position().left > $(".e1").position().left && $("."+ player).position().left <= $(".f1").position().left){
		if (arrayE.length >=1){
			arrayE.shift();
		}
	}
	if ($("."+ player).position().left > $(".f1").position().left && $("."+ player).position().left <= $(".g1").position().left){
		if (arrayF.length >=1){
			arrayF.shift();
		}
	}
	if ($("."+ player).position().left > $(".g1").position().left){
		if (arrayG.length >=1){
			arrayG.shift();
		}
	}
}

 function passTurn(){
 	if (red === 1){
 		$("."+nextPosition).css("background-color", "red");
 		$(".redpiece").css("display", "none");
 		red = 0;
 		blue = 1;
 		passToBlue();
 		$(".bluepiece").css("display", "inline-block");
 		$(".bluepiece").css("top", 8 + "vw");
 		$(".bluepiece").css("opacity", 1);
 		player = "bluepiece";
 		return;
 	} 
 	

 	if (blue === 1){
 		$("." + nextPosition).css("background-color", "blue");
 		$(".bluepiece").css("display", "none");
 		blue = 0;
 		red = 1;
 		passToRed();
 		$(".redpiece").css("display", "inline-block");
 		$(".redpiece").css("top", 8 + "vw");
 		$(".redpiece").css("opacity", 1);
 		player = "redpiece";
 		return;
 	} 
 

 }


function passToBlue(){
 	$(document).mousemove(function(event){
 		$(".bluepiece").css("left", event.pageX - 30);
 		$(".bluepiece").css("top", $(".a").position().top)
 		$(".bluepiece").css("margin-top", 1 + "vw");
 	})
 }


function passToRed(){
 	$(document).mousemove(function(event){
 		$(".redpiece").css("left", event.pageX - 30);
 		$(".redpiece").css("top", $(".a").position().top)
 		$(".redpiece").css("margin-top", 1 + "vw");
 	})
 }

function isColumnFull(theCol){
	if(theCol.length === 0){
		alert ("Column full. Try Again");
		return true;
	}
}

$(".playAgain").on('click', function(){
		location.reload();
	})

// --------------Update Array X -------------------------------- //

function updateXForRed(i){
	console.log(i);
	for (r = 0; r < 7; r++){
		for (c = 0; c < 6; c++){
			if (i == x[r][c]){
				x[r][c] = 1;
			}
		}
	}
	console.log(x);
}

function updateXForBlue(i){
	for (r = 0; r < 7; r++){
		for (c = 0; c < 6; c++){
			if (i === x[r][c]){
				x[r][c] = 2;
			}
		}
	}
}

// --------------Check for Winner ------------------------------ //

function chkLine(a,b,c,d) {
    // Check first cell non-zero and all cells match
   // console.log(a + ", " + b + ", " + c + ", " + d)
    return ((a != 0) && (a == b) && (a == c) && (a == d));
}
/*
function chkWinner(bd) {
	console.log("I'm checking for winner "+ bd);
    // Check down
    for (r = 0; r < 3; r++) {
        for (c = 0; c < 6; c++) {
        	console.log("This is chkLoop1: "+(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]));
          if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]) == true){
             alert("Winner is "+ player );
          }
         }
     }
    // Check right
    for (r = 0; r < 6; r++) {
        for (c = 0; c < 3; c++) {
        	console.log("This is chkLoop2: "+(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]));
            if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3])){
              alert("Winner is "+ player);
             }
        }
     }
    // Check down-right
    for (r = 0; r < 3; r++) {
        for (c = 0; c < 4; c++) {
        	console.log("This is chkLoop3: "+(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]));
            if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3])){
              alert("Winner is "+ player);
             }
        }
    }
    // Check down-left
    for (r = 3; r < 6; r++) {
        for (c = 0; c < 4; c++){
        	console.log("This is chkLoop4: "+(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c]));
            if (chkLine(bd[r][c], bd[r-1][c+1], bd[r-2][c+2], bd[r-3][c+3])){
            alert("Winner is "+ player);
            }
        }
    }
    return 0;
}
*/
// ==================End of Check for Winner ----------------------- //

function chkWinner(bd) {
	console.log("I'm checking for winner "+ bd);
    // Check down/UP
    for (r = 0; r < 7; r++) {
        for (c = 0; c < 3; c++) {
        	console.log("Thisi is chkLoop1: " + bd[r][c] + bd[r][c+1] + bd[r][c+2]+ bd[r][c+3]);
        	//console.log("This is chkLoop1: " + r c + ", " + r+1 c + ", " + r+2 c + ", " + r+3 c);
          if (chkLine(bd[r][c], bd[r][c+1], bd[r][c+2], bd[r][c+3]) == true){
						$("#player").text(player);
            	if (player === "redpiece"){
            		$(".modal-content").css("background-color", "red");
            		$(".modal-content").css("color", "white");
            	} else {
            		$(".modal-content").css("background-color", "blue");
            		$(".modal-content").css("color", "white");
            	}
              $('#winModal').modal('show');
              $('.rack').css("display", "none");
          }
         }
     }
    // Check right
    for (r = 0; r < 4; r++) {
        for (c = 0; c < 6; c++) {
        	console.log("This is chkLoop2: "+(bd[r][c]+ bd[r+1][c]+ bd[r+2][c]+ bd[r+3][c]));
            if (chkLine(bd[r][c], bd[r+1][c], bd[r+2][c], bd[r+3][c])){
            //  alert("Winner is "+ player);
            	$("#player").text(player);
            	if (player === "redpiece"){
            		$(".modal-content").css("background-color", "red");
            		$(".modal-content").css("color", "white");
            	} else {
            		$(".modal-content").css("background-color", "blue");
            		$(".modal-content").css("color", "white");
            	}
              $('#winModal').modal('show');
              $('.rack').css("display", "none");
              winSound.play();
            
             }
        }
     }
    // Check down-right/up-right
    for (r = 0; r < 4; r++) {
        for (c = 0; c < 3; c++) {
        	console.log("This is chkLoop3: "+(bd[r][c]+ bd[r+1][c+1] + bd[r+2][c+2] + bd[r+3][c+3]));
            if (chkLine(bd[r][c], bd[r+1][c+1], bd[r+2][c+2], bd[r+3][c+3])){
						$("#player").text(player);
            	if (player === "redpiece"){
            		$(".modal-content").css("background-color", "red");
            		$(".modal-content").css("color", "white");
            	} else {
            		$(".modal-content").css("background-color", "blue");
            		$(".modal-content").css("color", "white");
            	}
              $('#winModal').modal('show');
              $('.rack').css("display", "none");
             }
        }
    }
    // Check down-left/down-right
    for (r = 0; r < 4; r++) {
        for (c = 3; c < 6; c++){
        	console.log("This is chkLoop4: "+(bd[r][c]+ bd[r+1][c-1]+ bd[r+2][c-2]+ bd[r+3][c-3]));
            if (chkLine(bd[r][c], bd[r+1][c-1], bd[r+2][c-2], bd[r+3][c-3])){
						$("#player").text(player);
            	if (player === "redpiece"){
            		$(".modal-content").css("background-color", "red");
            		$(".modal-content").css("color", "white");
            	} else {
            		$(".modal-content").css("background-color", "blue");
            		$(".modal-content").css("color", "white");
            	}
              $('#winModal').modal('show');
              $('.rack').css("display", "none");
            }
        }
    }
    return 0;
}


