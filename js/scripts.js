var digitConverter = function(number) {
  var numeralList = {one:"I", five:"V", ten:"X"}; // = numeralList
  var one = numeralList.one;
  var five = numeralList.five;
  var ten = numeralList.ten;

    if (number <= 3) {
      return (number * one);
    } else if (number === 4) {
      return (one + five);
    } else if (number >= 5 && number < 9) {
      return (five + (one.repeat(number - 5)));
    } else if (number === 9) {
      return (one + ten);
    }
}; 









$(document).ready(function(){


  $("#convertButton").click(function(event){
    console.log("test");
    var userNumber = parseInt($("#numberInput").val());


    var result = digitConverter(userNumber);
    $("#numeralResult").text(result);
  });

});
