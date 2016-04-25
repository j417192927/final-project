jQuery(document).ready(function($) {
$(".login-button").click(function(){
	$(".login-index").fadeIn()
});
$(window).click(function(){
	$("").fadeIn()
});
$(".login-button").click(function(){
	$(".background-grey").fadeIn();
	$("body").addClass("no-scroll");
});

$(".background-grey").click(function(){
	$(".login-index").fadeOut()
	$(".background-grey").fadeOut();
	$("body").removeClass("no-scroll");
});

















});