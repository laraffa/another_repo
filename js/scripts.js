var leapYear = function(year){
  var yearFetched = parseInt(year);

  if ((yearFetched < 0) || isNaN(yearFetched)){
    alert("Please enter a valid number");
    return false;
  } else if ((yearFetched % 4 == 0) && (yearFetched % 100 !== 0) || (yearFetched % 400 == 0)){
      return true;
  } else {
    $(".not").text("not");
    $("#result").show();
    return true;
  }
};

var checkEmpty = function(year){
    if(!year){
    alert("You fool! You entered nothing. Try again!");
    $('#result').hide();
    return true;
  } else {
    return false;
  }
};


$(function() {
  $("form#leap-year").submit(function(event) {
    var year = $('#year').val();
    var emptyChecked = checkEmpty(year);

    checkEmpty(year);

    if(!emptyChecked){
       if(!leapYear(year)){
         $('#result').hide();
         return false;
        } else {
          $(".year").text(year);
          $("#result").show();
          }
        }
    event.preventDefault();
  });
});
