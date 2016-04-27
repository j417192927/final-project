jQuery(document).ready(function($) {
$(".login-button").click(function(){
	$(".login-index").fadeIn()
});

$(".login-button").click(function(){
	$(".background-grey").fadeIn();
	$("body").addClass("no-scroll");
});

$(".background-grey").click(function(){
  $(".background-grey").fadeOut();
  $("body").removeClass("no-scroll");
  $(".login-index").fadeOut()
});




var waypoint = new Waypoint({
  element: $('.left-half-3'),
  handler: function() {
   $('.left-half-3').addClass("fadeInLeftBig");
  },
  offset: '25%'
});
var waypoint = new Waypoint({
  element: $('.right-half-3'),
  handler: function() {
   $('.right-half-3').addClass("fadeInRightBig");
  },
  offset: '25%'
});






var waypoint = new Waypoint({
  element: $('.small-pic'),
  handler: function() {
   $('.small-pic').addClass("fadeInLeftBig");
  },
  offset: '75%'
});
var waypoint = new Waypoint({
  element: $('.small-pic-1'),
  handler: function() {
   $('.small-pic-1').addClass("fadeInRightBig");
  },
  offset: '75%'
});










});