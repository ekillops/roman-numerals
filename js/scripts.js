var converterLoop = function(number) {
  var numeralLists = [{one:"I", five:"V", ten:"X"}, {one:"X", five:"L", ten:"C"}, {one:"C", five:"D", ten:"M"}, {one:"M", five:"-", ten:"-"}];

  var number = number.split('').reverse();

  for (var index = 0; index < number.length; index += 1) {
    number[index] = digitConverter(number[index], numeralLists[index]);
  };

  return number.reverse().join('');
};


var digitConverter = function(inNumber, numeralList) {

  var one = numeralList.one;
  var five = numeralList.five;
  var ten = numeralList.ten;
  var number = parseInt(inNumber);

    if (number <= 3) {
      number = one.repeat(number);
    } else if (number === 4) {
      number = one + five;
    } else if (number >= 5 && number < 9) {
      number = five + (one.repeat(number - 5));
    } else if (number === 9) {
      number = one + ten;
    }

return number;
};

$(document).ready(function(){


  $("#inputBox").submit(function(event){
    event.preventDefault();
    var userNumber = $("#numberInput").val();

    var result = converterLoop(userNumber);
    $("#numeralResult").text(result);

  });

});
