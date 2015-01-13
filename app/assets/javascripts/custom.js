$(window).on('scroll', function(){
  var logo = $('.nav-apply');
  var w = $(window);
  if(w.scrollTop() > 350){
    logo.stop(true, false).fadeTo(100, 1.0);
  } else if(w.scrollTop() < 350) {
    logo.stop(true, false).fadeTo(100, 0);
  }
});

$(window).scroll(function() {
    $(".hero-unit").css({
    'opacity' : 1-(($(this).scrollTop())/300)
    });          
});

