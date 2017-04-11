console.log("jQuery has started");

// var addPepperoniXpos = window.innerWidth / 1088 * 43;

// console.log("Here is " + addPepperoniXpos);

//	$(".addPepperoni").css("left", addPepperoniXpos + "%");


 $(".button-collapse").sideNav();

   $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );


// Start Owl-Carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    // autoplaySpeed: 100,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});

// End Owl-Carousel


// Start Order Carousel (bootstrap)

$('.carousel').carousel({
  interval: 2000
});

// End Order Carousel (bootstrap)

// --------- Start of Size Selection --------------------------
var cost = 0;
var cashSound = new Audio("img/order/ChaChing.m4a");

var removeCost = function(item){
	cost = cost - prices[item];
	costFixed = cost.toFixed(2);
	$("span#cost").text(costFixed);
}

var addCost = function(item){
	cost = cost + prices[item];
	costFixed = cost.toFixed(2);
	$("span#cost").text(costFixed);
	$(".total").text("Total Cost: $" + costFixed);
}

if(cost === 0){
	$("#checkout").css("display", "none");
} else {
	$("#checkout").css("display", "inline-block");
}

var windowWidth = window.innerWidth;
console.log("Width: " + windowWidth);

var movePlate = windowWidth * 0.014;
var movePizza = windowWidth * 0.015;

var getPlateXPosition = function(){
	var platePosition = $(".plate").position();
	var pizzaPosition = $(".pizza").position();

	var plateXPosition = platePosition.left;
	var pizzaXPosition = pizzaPosition.left;


	console.log("plate Xpos: " + plateXPosition);
	console.log("pizza Xpos: " + plateXPosition);
}

$(".confirmSize").attr("disabled", true);
$(".plate").css("left", "+=" + movePlate * 24 + "px");
$(".pizza").css("left", movePizza + "%");
// $(".pepperoni, .chicken, .italianSausage, .meatballs, .pepper, .olives, .spinach, .pineapple").css("left", movePizza + "%");
// $(".addPepperoni, .addChicken, .addItalianSausage, .addMeatballs").css("left", movePizza + "px");

$(".pizza").css("display", "none");
$(".confirmMeat").attr("disabled", true);
$("#pepperoni").attr("disabled", true);
$("#chicken").attr("disabled", true);
$("#meatballs").attr("disabled", true);
$("#italianSausage").attr("disabled", true);

$(".confirmVeggies").attr("disabled", true);
$("#pepper").attr("disabled", true);
$("#pineapple").attr("disabled", true);
$("#spinach").attr("disabled", true);
$("#olives").attr("disabled", true);

// ----------Start of Pizza Selection ------------- //

$("#large").on("click", function(){
	if(window.innerWidth > 600)	{
		$(".pizza").css("display", "inline-block");
	}
		$(".pizza").addClass("addPizza");
		cashSound.play();
		cost = 0;
		addCost("large");
		$(".confirmSize").attr("disabled", false);
	})

$("#medium").on("click", function(){
	if(window.innerWidth > 600)	{
		$(".pizza").css("display", "inline-block");
	}
	$(".pizza").addClass("addPizza");
	cashSound.play();
	cost = 0;
	addCost("medium");
	$(".confirmSize").attr("disabled", false);
	})

$("#small").on("click", function(){
	if(window.innerWidth > 600)	{
		$(".pizza").css("display", "inline-block");
	}
	$(".pizza").addClass("addPizza");
	cashSound.play();
	cost = 0;
	addCost("small");
	$(".confirmSize").attr("disabled", false);
	})

$(".confirmSize").on("click", function(){
	if ($("#large").is(":checked")){
	console.log("large was selected");
	}
	$(".plate").css("left", "+=" + movePlate * 17 + "px");
	$(".addPizza").css("left", "+=" + movePlate * 17 + "px");
//	$(".pepperoni, .chicken, .italianSausage, .meatballs").css("left", "+=" + (movePizza + 240)  + "px");
//	$(".addPepperoni, .addChicken, .addItalianSausage, .addMeatballs").css("left", "+=" + movePlate * 17 + "px");
	$(".confirmSize").attr("disabled", true);
	$("#large").attr("disabled", true);
	$("#medium").attr("disabled", true);
	$("#small").attr("disabled", true);

	$(".confirmMeat").attr("disabled", false);
	$("#pepperoni").attr("disabled", false);
	$("#chicken").attr("disabled", false);
	$("#meatballs").attr("disabled", false);
	$("#italianSausage").attr("disabled", false);

	$("#checkout").css("display", "inline-block");
});

// --------------- Start of Meat Selection -----------------------------------
// $(".pepperoni, .chicken, .italianSausage, .meatballs").css("left", movePlate  31 + "px");
//	 $(".addPepperoni, .addChicken, .addItalianSausage, .addMeatballs").css("left", "+" + movePlate * 50 + "px");

$("#pepperoni").on("click", function(){
	if($("#pepperoni").is(":checked")){
		$(".pepperoni").addClass("addPepperoni");
		addCost("pepperoni");
		cashSound.play();
		} else {
		$(".pepperoni").removeClass("addPepperoni");
		removeCost("pepperoni");
		}
		
	})

	$("#chicken").on("click", function(){
	if($("#chicken").is(":checked")){
		$(".chicken").addClass("addChicken");
		addCost("chicken");
		cashSound.play();
		} else {
		$(".chicken").removeClass("addChicken");
		removeCost("chicken")
		}
		
	})

	$("#italianSausage").on("click", function(){
	if($("#italianSausage").is(":checked")){
		$(".italianSausage").addClass("addItalianSausage");
		addCost("italianSausage");
		cashSound.play();
		} else {
		$(".italianSausage").removeClass("addItalianSausage");
		removeCost("italianSausage");
		}
		
	})

	$("#meatballs").on("click", function(){
	if($("#meatballs").is(":checked")){
		$(".meatballs").addClass("addMeatballs");
		addCost("meatballs");
		cashSound.play();
		} else {
		$(".meatballs").removeClass("addMeatballs");
		removeCost("meatballs");
		}
	})



	$(".confirmMeat").on("click", function(){
		console.log("confirmMeat clicked");
		$(".plate").css("left", "+=" + movePlate * 17 + "px");
		getPlateXPosition();
		$(".addPizza, .addPepperoni, .addChicken, .addItalianSausage, .addMeatballs").css("left", "+=" + movePlate * 17 + "px");
	//	$(".pepper, .olives, .spinach, .pineapple").css("left", movePlate * 4.35 + "px");
		$(".confirmMeat").attr("disabled", true);
		$("#pepperoni").attr("disabled", true);
		$("#chicken").attr("disabled", true);
		$("#meatballs").attr("disabled", true);
		$("#italianSausage").attr("disabled", true);

		$(".confirmVeggies").attr("disabled", false);
		$("#pepper").attr("disabled", false);
		$("#pineapple").attr("disabled", false);
		$("#spinach").attr("disabled", false);
		$("#olives").attr("disabled", false);
	});

// ---------------- Start of Vegetable Selection--------
	
	$("#pepper").on("click", function(){
		if($("#pepper").is(":checked")){
			$(".pepper").addClass("addPepper");
			addCost("pepper");
			cashSound.play();
			} else {
			$(".pepper").removeClass("addPepper");
			removeCost("pepper");
			}
		})

		$("#olives").on("click", function(){
		if($("#olives").is(":checked")){
			$(".olives").addClass("addOlives");
			addCost("olives");
			cashSound.play();
			} else {
			$(".olives").removeClass("addOlives");
			removeCost("olives");
			}
		})

	$("#spinach").on("click", function(){
		if($("#spinach").is(":checked")){
			console.log("spinach was checked");
			$(".spinach").addClass("addSpinach");
			addCost("spinach");
			cashSound.play();
			} else {
			$(".spinach").removeClass("addSpinach");
			removeCost("spinach");
			}
		})

	$("#pineapple").on("click", function(){
		if($("#pineapple").is(":checked")){
			$(".pineapple").addClass("addPineapple");
			addCost("pineapple");
			cashSound.play();
			} else {
			$(".pineapple").removeClass("addPineapple");
			removeCost("pineapple");
			}
		})


	$(".confirmVeggies").on("click", function(){
		console.log("confirmVeggies clicked");
		$(".plate, .addPizza, .addPepperoni, .addChicken, .addItalianSausage, .addMeatballs, .addPineapple, .addPepper, .addOlives, .addSpinach").css("left", "+=700px");
		getPlateXPosition();
		$(".confirmVeggies").attr("disabled", true);
		$("#pepper").attr("disabled", true);
		$("#pineapple").attr("disabled", true);
		$("#spinach").attr("disabled", true);
		$("#olives").attr("disabled", true);
	
	});

var prices = {
	large: 13.99,
	medium: 11.99,
	small: 9.99,
	pepperoni: 1.99,
	chicken: 1.99,
	italianSausage: 1.99,
	meatballs: 1.99,
	pepper: 0.99,
	olives: 0.99,
	pineapple: 0.99,
	spinach: 0.99
}

$(".confirmSize").on("click", function(){
	var pizzaOrder = "";
	var pizzaSize = "large";
	if ($("#large").is(":checked")) {
			pizzaOrder = "Large Pizza";
	}
	if ($("#medium").is(":checked")) {
			pizzaOrder = "Medium Pizza";
			pizzaSize = "medium";
	}
		if ($("#small").is(":checked")) {
			pizzaOrder = "Small Pizza";
			pizzaSize = "small";
	}
	$(".orderedPizza").text(pizzaOrder + " : $" + prices[pizzaSize]);

})

$(".confirmMeat").on("click", function(){
	console.log("confirming my order!!")
	var meatOrder = "";
	var numOfMeats = 0;
	

	if ($("#pepperoni").is(":checked")) {
			$(".orderedMeat").append('Pepperoni: $' + prices["pepperoni"] + '<br>');

			meatOrder = meatOrder + " Pepperoni";
		//	numOfMeats = numOfMeats + 1;
	}
	if ($("#chicken").is(":checked")) {
			$(".orderedMeat").append('Chicken: $' + prices["chicken"] + '<br>');

			meatOrder = meatOrder + " Chicken";
		//	numOfMeats = numOfMeats + 1;
	}
		if ($("#italianSausage").is(":checked")) {
			$(".orderedMeat").append('Italian Sausage: $' + prices["italianSausage"] + '<br>');
			meatOrder = meatOrder + " Italian Sausage";
		//	numOfMeats = numOfMeats + 1;
	}
		if ($("#meatballs").is(":checked")) {
			$(".orderedMeat").append('Meatballs: $' + prices["meatballs"] + '<br>');
			meatOrder = meatOrder + " Meatballs";
		//	numOfMeats = numOfMeats + 1;
	}
	//	$(".orderedMeat").text(meatOrder + " : $" + (1.99 * numOfMeats));

})

$(".confirmVeggies").on("click", function(){
	console.log("confirming my order!!")
	var veggiesOrder = "";
	var numOfVeggies = 0;
	if ($("#pepper").is(":checked")) {
			$(".orderedVeggies").append('Pepper: $' + prices["pepper"] + '<br>');
			veggiesOrder = veggiesOrder + " Pepper";
		//	numOfVeggies = numOfVeggies + 1;
	}
	if ($("#olives").is(":checked")) {
			$(".orderedVeggies").append('Olives: $' + prices["olives"] + '<br>');
			veggiesOrder = veggiesOrder + " Olives";
		//	numOfVeggies = numOfVeggies + 1;
	}
		if ($("#pineapple").is(":checked")) {
			$(".orderedVeggies").append('Pineapple: $' + prices["pineapple"] + '<br>');
			veggiesOrder = veggiesOrder + " Pineapple";
		//	numOfVeggies = numOfVeggies + 1;
	}
		if ($("#spinach").is(":checked")) {
			$(".orderedVeggies").append('Spinach: $' + prices["spinach"] + '<br>');
			veggiesOrder = veggiesOrder + " Spinach";
		//	numOfVeggies = numOfVeggies + 1;
	}
	//	$(".orderedVeggies").text(veggiesOrder + " : $" + (0.99 * numOfVeggies).toFixed(2));

	});



$(".mymodal").on("click", function(){
 		$('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
    });
 });

$(".restart").on("click", function(){
	location.reload();
})

$(".signin").on("click", function(){
 		$('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
    });
 });

$(".modalDone").on("click", function(){
 		$('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
    });
 });


// --- Start of Map of Locations ----- //
var locations = [
      ['Queens, NY', 40.7282, -73.7949, 4],
      ['Woodbridge, NJ', 40.5576, -74.2846, 5],
      ['Newark, NJ', 40.7357, -74.1724, 3],
      ['Brooklyn NY', 40.6782, -73.9442, 2],
      ['New York City', 40.7128, -74.0059, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(40.7128, -74.0059),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

// ---- End of Map of Locations --------------- //




/*

 $(".closeModal").on("click", function(){
		$('.modal').modal();
 })
 
*/

// -----------End of Order ------------------------- //

/*
$(".moveBackward").on("click", function(){
	console.log("mover clicked");
	$("#pizza").css("left", "-=200px");
});
*/

// End of buttons





