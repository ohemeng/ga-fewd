console.log("jQuery started");

function myFunction(x) {
    x.classList.toggle("change");
}

$(".container").on("click", function(){
	console.log("container was clicked");
	$(".mobileMenu").toggleClass("showMobileMenu");
})