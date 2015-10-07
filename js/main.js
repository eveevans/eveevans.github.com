Zepto(function($){
  // $('#logo').mouseenter(function(e){
  $('#logo').click(function(e){
    $('body').toggleClass('open-menu');
    e.preventDefault();
  });
})
