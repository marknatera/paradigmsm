// $(window).on('scroll', function(){
//   var logo = $('.header-16');
//   var w = $(window);
//   if(w.scrollTop() > 350){
//     logo.stop(true, false).fadeTo(100, 1.0);
//   } else if(w.scrollTop() < 350) {
//     logo.stop(true, false).fadeTo(100, 0);
//   }
// });

$(window).scroll(function() {
    $("#logo-main").css({
    'opacity' : 1-(($(this).scrollTop())/300)
    });          
});

$(document).ready(function() {
  $(window).scroll(function(){
    if(document.body.scrollTop > 600)
      $('#header').fadeIn( "slow", function() { });
    else  
      $('#header').fadeOut( "slow", function() { });
  });

  $('a#srolltotop').click(function(){
    $('html, body').animate({scrollTop:0}, 100);
    return false;
  });
});
