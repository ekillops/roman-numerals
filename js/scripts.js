$(document).ready(function(){


  $("#convertButton").submit(function(event){
    event.preventDefault();
    var userNumber = $("#numberInput").val();


    var result = [];
    $("#numeralResult").text(result);
  });

});
