$(document).ready(function(){
  // cover carousel initialization
  $("#coverCarousel").owlCarousel({
    loop: true,
    margin: 20,
    items: 3,
    nav: false,
    lazyLoad: true,
    dots: true
  });

  // hamburguer menu animation
  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
  });

  // info section efect on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.info').stop().animate({ left: '0px' });
    } else {
      $('.info').stop().animate({ left: '-300px' });
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.col-md-5').stop().animate({ right: '0px' });
    } else {
      $('.col-md-5').stop().animate({ right: '-300px' });
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.col-md-5').stop().animate({ right: '0px' });
    } else {
      $('.col-md-5').stop().animate({ right: '-300px' });
    }
  });

  // slide in on records section
  $(window).scroll( function(){
    $('#records').each( function(i){
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      bottom_of_window = bottom_of_window + 500;
      
      if( bottom_of_window > bottom_of_object ){
        $(this).animate({'opacity':'1'},1500);
      } 
    });
  });
});