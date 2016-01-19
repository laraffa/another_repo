var leapYear = function(year){
  var yearFetched = parseInt(year);

  if ((yearFetched < 0) || isNaN(yearFetched)){
    return true;
  } else if ((yearFetched % 4 == 0) && (yearFetched % 100 !== 0) || (yearFetched % 400 == 0)){
      return true;
  } else {
    return false;
  }
};

var checkEmpty = function(year){
    if(!year){
    return true;
  } else {
    return false;
  }
};
