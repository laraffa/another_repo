var leapYear = function(year){
  var yearFetched = parseInt(year);
  if (isNaN(yearFetched)){
    return true;
  } else if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)){
      return true;
    } else {
      return false;
    }
};
