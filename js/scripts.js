// Business Logic
var numberInput = number.val();
var pingPong = function(number) {
  if (number % 3 === 0)
    return "ping";
};

// User Interface Logic

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = pingPong(number);

    $(".number").text(number);



    $("#result").show();
  });
