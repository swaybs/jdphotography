$(document).ready(function() {


  // $('html').append('<div class="load"><h1 class="onLoad">loading...</h1></div>');
  //
  //
  // /*! Fades in page on load */
  // $('body').css('display', 'none');
  // $('body').delay(4000).fadeIn(1000);



  // Working code below this line
  $('html')
    .append('<h1 class="onLoad">loading...</h1>');

  $('body').css('display', 'none')
  .delay(4000).fadeIn(2000, function() {
    $('.onLoad').fadeOut(100);
  });

});


(function ($) {
  $(document).ready(function(){

	// hide .navbar first
	$(".navFixed").hide();

	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 100) {
				$('.navFixed').fadeIn();
			} else {
				$('.navFixed').fadeOut();
			}
		});


	});

});
  }(jQuery));
