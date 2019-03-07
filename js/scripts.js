// Business Logic
var number = $("#number").val();

var pingPong = function(number) {
  for (var i = 1; i <= number; i++) {
    if (i % 3 === 0) {
      $(".number").append("ping");
    } else if (i % 5 ===0){
      $(".number").append("pong");
    } else {
      $(".number").append(i);
    }
};
};

// User Interface Logic

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = pingPong(number);

  //  $(".number").text(number);


  event.preventDefault();
    //$("#result").show();
    });
  })
