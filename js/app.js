$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();    
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '212px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

  $(document).keydown(function(event) {
    if (event.which == 88) {
   playEpic();
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-cool').show();
  }
  });
  
  $(document).keyup(function(event) {
    if (event.which == 88) {
      $('.ryu-cool').hide();
      $('.ryu-still').show();

    }
  });

});