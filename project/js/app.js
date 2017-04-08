console.log("jQuery has started");


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

$(".plate").css("left", "10%");
$(".pizza").css("display", "none");

$("#large").on("click", function(){
	$(".pizza").css("display", "inline-block");
	$(".pizza").addClass("addPizza");
	})

$(".confirmSize").on("click", function(){
	if ($("#large").is(":checked")){
	}
	$(".plate").css("left", "40%");
	$(".addPizza").css("left", "41%");
	$(".confirmSize").attr("disabled", "true");
	$("#large").attr("disabled", "true");
	$("#meduim").attr("disabled", "true");
	$("#small").attr("disabled", "true");
});

// --------------- Start of Meat Selection -----------------------------------

$("#pepperoni").on("click", function(){
	if($("#pepperoni").is(":checked")){
		console.log("pepperoni was checked");
		$(".pepperoni").addClass("addPepperoni");
		} else {
		$(".pepperoni").removeClass("addPepperoni");
		}
	})

	$("#chicken").on("click", function(){
	if($("#chicken").is(":checked")){
		$(".chicken").addClass("addChicken");
		} else {
		$(".chicken").removeClass("addChicken");
		}
	})

	$("#italianSausage").on("click", function(){
	if($("#italianSausage").is(":checked")){
		$(".italianSausage").addClass("addItalianSausage");
		} else {
		$(".italianSausage").removeClass("addItalianSausage");
		}
	})

	$("#meatballs").on("click", function(){
	if($("#meatballs").is(":checked")){
		$(".meatballs").addClass("addMeatballs");
		} else {
		$(".meatballs").removeClass("addMeatballs");
		}
	})

	$(".confirmMeat").on("click", function(){
		console.log("confirmMeat clicked");
		$(".plate").css("left", "75%");
		$(".addPizza, .addPepperoni, .addChicken, .addItalianSausage, .addMeatballs").css("left", "72%");
		$(".confirmMeat").attr("disabled", "true");
		$("#pepperoni").attr("disabled", "true");
		$("#chicken").attr("disabled", "true");
		$("#meatballs").attr("disabled", "true");
		$("#italianSausage").attr("disabled", "true");
	});

// ---------------- Start of Vegetable Selection--------
	
	$("#pepper").on("click", function(){
		if($("#pepper").is(":checked")){
			$(".pepper").addClass("addPepper");
			} else {
			$(".pepper").removeClass("addPepper");
			}
		})

		$("#olives").on("click", function(){
		if($("#olives").is(":checked")){
			$(".olives").addClass("addOlives");
			} else {
			$(".olives").removeClass("addOlives");
			}
		})

	$("#spinach").on("click", function(){
		if($("#spinach").is(":checked")){
			console.log("spinach was checked");
			$(".spinach").addClass("addSpinach");
			} else {
			$(".spinach").removeClass("addSpinach");
			}
		})

	$("#pineapple").on("click", function(){
		if($("#pineapple").is(":checked")){
			$(".pineapple").addClass("addPineapple");
			} else {
			$(".pineapple").removeClass("addPineapple");
			}
		})


	$(".confirmVeggies").on("click", function(){
		console.log("confirmVeggies clicked");
		$(".plate, .addPizza, .addPepperoni, .addChicken, .addItalianSausage, .addMeatballs, .addPineapple, .addPepper, .addOlives, .addSpinach").css("left", "+=225px");
		$(".confirmVeggies").attr("disabled", "true");
		$("#pepper").attr("disabled", "true");
		$("#pineapple").attr("disabled", "true");
		$("#spinach").attr("disabled", "true");
		$("#olives").attr("disabled", "true");
	
	});




/*
$(".moveBackward").on("click", function(){
	console.log("mover clicked");
	$("#pizza").css("left", "-=200px");
});
*/

// End of buttons





