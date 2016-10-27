var digitConverter = function(number) {
  var onesNumerals = {one:"I", five:"V", ten:"X"}; // = numeralList
  return onesNumerals.one.repeat(number);
};









$(document).ready(function(){


  $("#convertButton").click(function(event){
    console.log("test");
    var userNumber = parseInt($("#numberInput").val());


    var result = digitConverter(userNumber);
    $("#numeralResult").text(result);
  });

});
