// Business Logic
var number = $("#number").val();

var pingPong = function(number) {
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      $(".number").append("<li>pingpong</li>");
    } else if (i % 3 === 0){
      $(".number").append("<li>ping</li>");
    } else if (i % 5 === 0){
      $(".number").append("<li>pong</li>");
    } else {
      $(".number").append('<li>' + i + '</li>');
    }
  };
};

// User Interface Logic

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var number = parseInt($("input#number").val());
    $(".number").empty();
    pingPong(number);

  event.preventDefault();
    });
  })
