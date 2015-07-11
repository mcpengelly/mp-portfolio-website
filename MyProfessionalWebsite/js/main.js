$('.dropdown-toggle').dropdown();

$(document).ready(function(){
	$('.carouselName').carousel();
});

$('#myTab a').click(function (clickEvent) {
	 clickEvent.preventDefault();
	 $(this).tab('show');
});

$(function () {
	$('#myTab a:last').tab('show');
});

$(function() {
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//var jumboHeight = $('.jumbotron').outerHeight();

//function parallax(){
    //var scrolled = $(window).scrollTop();
   // $('.bg').css('height', (jumboHeight-scrolled) + 'px');
//}
//$(window).scroll(function(e){
   // parallax();
//});
