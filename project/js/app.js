console.log("jQuery has started");

 $(".button-collapse").sideNav();

// --------  Start of Side Navigation Menu ----- //
   $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );


// ------- Start Owl-Carousel  ---------- //

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

// -------- End Owl-Carousel  ------------- //


// -------- Start Order Carousel (bootstrap)  ------- //

$('.carousel').carousel({
  interval: 2000
});

// -------- End Order Carousel (bootstrap)  --------- //


// ----------Mobile / Start of Pizza Selection ------------- //

if(window.innerWidth <= 600)	{

	$("#large").on("click", function(){
		cashSound.play();
		$(".mPlaceholder").addClass("mobilePizza");
		console.log("mobilepizza added");
		//$(".mobilePizza").css("display", "inline-block");
		})

	$("#medium").on("click", function(){
		$(".mPlaceholder").addClass("mobilePizza");
		cashSound.play();
		cost = 0;
		addCost("medium");
		$(".confirmSize").attr("disabled", false);
		})

	$("#small").on("click", function(){
		$(".mPlaceholder").addClass("mobilePizza");
		cashSound.play();
		cost = 0;
		addCost("small");
		$(".confirmSize").attr("disabled", false);
		})

	$(".confirmSize").on("click", function(){
		if ($("#large").is(":checked")){
		console.log("large was selected");
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
		}
	})

	$("#pepperoni").on("click", function(){
	if($("#pepperoni").is(":checked")){
		$(".mPepperoni").addClass("mobilePepperoni");
		cashSound.play();
		} else {
		$(".mPepperoni").removeClass("mobilePepperoni");
		removeCost("pepperoni");
		}
		
	})

	$("#chicken").on("click", function(){
	if($("#chicken").is(":checked")){
		$(".mChicken").addClass("mobileChicken");
		cashSound.play();
		} else {
		$(".mChicken").removeClass("mobileChicken");
		removeCost("chicken")
		}
		
	})

	$("#italianSausage").on("click", function(){
	if($("#italianSausage").is(":checked")){
		$(".mItalianSausage").addClass("mobileItalianSausage");
		cashSound.play();
		} else {
		$(".mItalianSausage").removeClass("mobileItalianSausage");
		removeCost("italianSausage");
		}
		
	})

	$("#meatballs").on("click", function(){
	if($("#meatballs").is(":checked")){
		$(".mMeatballs").addClass("mobileMeatballs");
		cashSound.play();
		} else {
		$(".mMeatballs").removeClass("mobileMeatballs");
		removeCost("meatballs");
		}
	})

	$(".confirmMeat").on("click", function(){
		console.log("confirmMeat clicked");
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

// ---------------- Start of Vegetable Selection-------- //
	
	$("#pepper").on("click", function(){
		if($("#pepper").is(":checked")){
			$(".mPepper").addClass("mobilePepper");
			cashSound.play();
			} else {
			$(".mPepper").removeClass("mobilePepper");
			removeCost("pepper");
			}
		})

		$("#olives").on("click", function(){
		if($("#olives").is(":checked")){
			$(".mOlives").addClass("mobileOlives");
			cashSound.play();
			} else {
			$(".mOlives").removeClass("mobileOlives");
			removeCost("olives");
			}
		})

	$("#spinach").on("click", function(){
		if($("#spinach").is(":checked")){
			console.log("spinach was checked");
			$(".mSpinach").addClass("mobileSpinach");
			cashSound.play();
			} else {
			$(".mSpinach").removeClass("mobileSpinach");
			removeCost("spinach");
			}
		})

	$("#pineapple").on("click", function(){
		if($("#pineapple").is(":checked")){
			$(".mPineapple").addClass("mobilePineapple");
			cashSound.play();
			} else {
			$(".mPineapple").removeClass("mobilePineapple");
			removeCost("pineapple");
			}
		})


	$(".confirmVeggies").on("click", function(){
		$(".confirmVeggies").attr("disabled", true);
		$("#pepper").attr("disabled", true);
		$("#pineapple").attr("disabled", true);
		$("#spinach").attr("disabled", true);
		$("#olives").attr("disabled", true);
	});
}

// ----------End of Mobile Pizza ------ //



// --------- Start of Size Selection --------------------------
var cost = 0;
var cashSound = new Audio("img/order/ChaChing.m4a");

var removeCost = function(item){
	cost = cost - prices[item];
	costFixed = cost.toFixed(2);
	$("span#cost").text(costFixed);
	$(".total").html("<tr><td>" + "Total Cost:" + "</td>" + "<td></td>" + "<td>" + "$" + costFixed + "</td>" + "</tr>");
}

var addCost = function(item){
	cost = cost + prices[item];
	costFixed = cost.toFixed(2);
	$("span#cost").text(costFixed);
	$(".total").html("<tr><td>" + "Total Cost:" + "</td>" + "<td></td>" + "<td>" + "$" + costFixed + "</td>" + "</tr>");
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
		Materialize.toast('Remember to click "Confirm" when done!', 5000);
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

$("#pepperoni").on("click", function(){
	if($("#pepperoni").is(":checked")){
		Materialize.toast('Remember to click "Confirm" when done!', 5000);
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
			Materialize.toast('Remember to click "Confirm" when done!', 5000);
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
	spinach: 0.99,
	cheesePizza: 13.99,
	pepperoniPizza: 15.98,
	meatPizza: 15.98,
	supremePizza: 17.97
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
	$(".orderedPizza").append("<tr><td>" + pizzaOrder + ":" + "</td>" + "<td> </td>" + "<td>" + "$" + prices[pizzaSize] + "</td></tr>");

})

$(".confirmMeat").on("click", function(){
	console.log("confirming my order!!")
	var meatOrder = "";
	var numOfMeats = 0;
	

	if ($("#pepperoni").is(":checked")) {
			$(".orderedMeat").append("<tr><td>" + 'Pepperoni:' + "</td>" + "<td> </td>" + "<td>" + "$" + prices["pepperoni"] + "</td></tr>");

			meatOrder = meatOrder + " Pepperoni";
	}
	if ($("#chicken").is(":checked")) {
			$(".orderedMeat").append("<tr><td>" + 'Chicken:' + "</td>" + "<td> </td>" + "<td>" + "$" + prices["chicken"] + "</td></tr>");

			meatOrder = meatOrder + " Chicken";
	}
		if ($("#italianSausage").is(":checked")) {
			$(".orderedMeat").append("<tr><td>" + 'Italian Sausage:' + "</td>" + "<td></td>" + "<td>" +  "$" + prices["italianSausage"] + "</td></tr>");
			meatOrder = meatOrder + " Italian Sausage";
	}
		if ($("#meatballs").is(":checked")) {
			$(".orderedMeat").append("<tr><td>" + 'Meatballs:' + "</td>" + "<td></td>"  + "<td>" + "$" + prices["meatballs"] + "</td></tr>");
			meatOrder = meatOrder + " Meatballs";
	}
	
})

$(".confirmVeggies").on("click", function(){
	console.log("confirming my order!!")
	var veggiesOrder = "";
	var numOfVeggies = 0;
	if ($("#pepper").is(":checked")) {
			$(".orderedVeggies").append("<tr><td>" + 'Pepper:' + "</td>" + "<td></td>"  + "<td>"  + "$" + prices["pepper"] + "</td></tr>");
			veggiesOrder = veggiesOrder + " Pepper";
	}
	if ($("#olives").is(":checked")) {
			$(".orderedVeggies").append("<tr><td>" + 'Olives:' + "</td>" + "<td></td>" +  "<td>"   + "$" + prices["olives"] + "</td></tr>");
			veggiesOrder = veggiesOrder + " Olives";
	}
		if ($("#pineapple").is(":checked")) {
			$(".orderedVeggies").append("<tr><td>" + 'Pineapple:' + "</td>" + "<td></td>" + "<td>" + "$" + prices["pineapple"] + "</td></tr>");
			veggiesOrder = veggiesOrder + " Pineapple";
	}
		if ($("#spinach").is(":checked")) {
			$(".orderedVeggies").append("<tr><td>" + 'Spinach:' + "</td>" + "<td></td>" + "<td>" + "$" + prices["spinach"] + "</td></tr>");
			veggiesOrder = veggiesOrder + " Spinach";
	}
	
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

// --------- Start of Sign In SessionStorage ------ //

 $(".login").on("click", function(){
 	console.log("Sign In clicked");
 	var myfirstname = $(".inputname").val();
 	localStorage.setItem("firstname", myfirstname);
 	$(".username").text(localStorage.getItem("firstname"));
 })
$(".username").text(localStorage.getItem("firstname"));


 // ----- Start ModalDone ------ //

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

$(".done").on("click", function(){
	$("#checkout").css("display", "none");
})

// ----- Start Pre-made Pizza ------ //
var numOfCheesePizzas = 0;
var cheesePizzaClassName = "cheesePizza2";
var cheesePizzaOrderedArray = [];

var numOfPepperoniPizzas = 0;
var pepperoniPizzaClassName = "pepperoniPizza2";
var pepperoniPizzaOrderedArray = [];

var numOfMeatPizzas = 0;
var meatPizzaClassName = "meatPizza2";
var meatPizzaOrderedArray = [];

var numOfSupremePizzas = 0;
var supremePizzaClassName = "supremePizza2";
var supremePizzaOrderedArray = [];


$(".orderedCheesePizza").on("click", function(){
	numOfCheesePizzas = numOfCheesePizzas + 1;
	cheesePizzaClassName = cheesePizzaClassName + numOfCheesePizzas;
	cheesePizzaOrderedArray.push(cheesePizzaClassName);
	var trow = $("<tr class =" + cheesePizzaClassName + "><td>" + "Cheese Pizza" + ":" + "</td>" + "<td> </td>" + "<td>" + "$" + prices["cheesePizza"] + "</td><td><a href='#' class='removeCheesePizzaOrder'>remove</a></td>" + "</tr>");
	$(".orderedPizza").append(trow);
	addCost("cheesePizza");

	$("tr."  + cheesePizzaClassName).on("click", function(event) {
  	var title = $(event.target).text();
  	cheesePizzaClassName = cheesePizzaOrderedArray.pop();
  	$("tr." + cheesePizzaClassName).toggleClass("orderedNoCheesePizza");
  	removeCost("cheesePizza");
	})

})


$(".orderedPepperoniPizza").on("click", function(){
	numOfPepporoniPizzas = numOfPepperoniPizzas + 1;
	pepperoniPizzaClassName = pepperoniPizzaClassName + numOfPepperoniPizzas;
	pepperoniPizzaOrderedArray.push(pepperoniPizzaClassName);

	var trow = $("<tr class =" + pepperoniPizzaClassName + "><td>" + "Pepperoni Pizza" + ":" + "</td>" + "<td> </td>" + "<td>" + "$" + prices["pepperoniPizza"] + "</td><td><a href='#' class='removePepperoniPizzaOrder'>remove</a></td>" + "</tr>");
	$(".orderedPizza").append(trow);
	addCost("pepperoniPizza");

	$("tr."  + pepperoniPizzaClassName).on("click", function(event) {
  	var title = $(event.target).text();
  	pepperoniPizzaClassName = pepperoniPizzaOrderedArray.pop();
  	$("tr." + pepperoniPizzaClassName).toggleClass("orderedNoPepperoniPizza");
  	removeCost("pepperoniPizza");
	})	

})

$(".orderedMeatPizza").on("click", function(){
	numOfMeatPizzas = numOfMeatPizzas + 1;
	meatPizzaClassName = meatPizzaClassName + numOfMeatPizzas;
	meatPizzaOrderedArray.push(meatPizzaClassName);
	var trow = $("<tr class =" + meatPizzaClassName +  "><td>" + "Meat Pizza" + ":" + "</td>" + "<td> </td>" + "<td>" + "$" + prices["meatPizza"] + "</td><td><a href='#' class='removeMeatPizzaOrder'>remove</a></td>" + "</tr>");
	$(".orderedPizza").append(trow);
	addCost("meatPizza");

	$("tr."  + meatPizzaClassName).on("click", function(event) {
  	var title = $(event.target).text();
  	meatPizzaClassName = meatPizzaOrderedArray.pop();
  	$("tr." + meatPizzaClassName).toggleClass("orderedNoMeatPizza");
  	removeCost("meatPizza");
	})		

})

$(".orderedSupremePizza").on("click", function(){
	numOfSupremePizzas = numOfSupremePizzas + 1;
	supremePizzaClassName = supremePizzaClassName + numOfSupremePizzas;
	supremePizzaOrderedArray.push(supremePizzaClassName);
	var trow = $("<tr class =" + supremePizzaClassName + "><td>" + "Supreme Pizza" + ":" + "</td>" + "<td> </td>" + "<td>" + "$" + prices["supremePizza"] + "</td><td><a href='#' class='removeSupremePizzaOrder'>remove</a></td>" + "</tr>");
	$(".orderedPizza").append(trow);
	addCost("supremePizza");

	$("tr."  + supremePizzaClassName).on("click", function(event) {
  	var title = $(event.target).text();
  	supremePizzaClassName = supremePizzaOrderedArray.pop();
  	$("tr." + supremePizzaClassName).toggleClass("orderedNoSupremePizza");
  	removeCost("supremePizza");
	})	

})

// ---- Remove Pre-made Order -------- //




// tr.find("a.removeCheesePizzaOrder").on("click", function() {
// 	console.log("removeOrder clicked");
// 	$(".cheesePizza2").css("display", "none");
// 	removeCost("cheesePizza");
// })



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




