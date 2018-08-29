$(document).ready(function() {


  // $('html').append('<div class="load"><h1 class="onLoad">loading...</h1></div>');
  //
  //
  // /*! Fades in page on load */
  // $('body').css('display', 'none');
  // $('body').delay(4000).fadeIn(1000);
  $('html')
    .append('<h1 class="onLoad">loading...</h1>');

  $('body').css('display', 'none')
  .delay(4000).fadeIn(1000, function() {
    $('.onLoad').fadeOut(100);
  });



});
