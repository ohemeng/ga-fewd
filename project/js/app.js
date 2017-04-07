 $(".button-collapse").sideNav();

   $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

   console.log("jQuery has started");

// Click sign-in to pop-up modal
$(".signIn").on("click", function(){
	$("body").css("background-color", "rgba(0,0,0,0.65)");
	$(".modal").fadeIn();
	//$(".modal").css("display", "block");
	console.log("clicked sign In");
});

// Click cancel to dismiss modal
	$(".btn2").on("click", function(){
		$(".modal").fadeOut();
		//$(".modal").css("display", "none");
		$("body").css("background-color", "rgba(255,255,255,1)");
	});

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

// Start of buttons
$(".moveForward").on("click", function(){
	console.log("mover clicked");
	$("#pizza").css("left", "+=200px");

	if ($("#large").is(":checked")){
	console.log("large was checked");
	}

	if ($("#pepperoni").is(":checked")){
	console.log("Pepperoni was selected");
	$("#pizza").css("background", "img/order/cheese_1.png");
	$("#pizza").css("z-index", "1");
	$("#pizza").attr("src", "img/order/topping_pepperoni.png");
	}
});

$(".moveBackward").on("click", function(){
	console.log("mover clicked");
	$("#pizza").css("left", "-=200px");
});

// End of buttons





