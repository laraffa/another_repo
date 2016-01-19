describe("leapYear", function(){
  it("is not going to be a leap year", function(){
    expect(leapYear(1986)).to.equal(false);
  });

  it("is going to be a leap year if year divisible by 4", function(){
    expect(leapYear(2004)).to.equal(true);
  });

  it("is not going to be a leap year if year divisible by 100", function(){
    expect(leapYear(2100)).to.equal(false);
  });

  it("is going to be a leap year if year divisible by 400", function(){
    expect(leapYear(2000)).to.equal(true);
  });

  it("is going to throw an alert if not a number", function(){
    expect(leapYear(NaN)).to.equal(true)
  });

  it("is going to throw an alert if number is negative", function(){
    expect(leapYear(-1)).to.equal(true);
  });

  // it("is going to throw an alert if nothing is entered", function(){
  //   expect(leapYear(" ")).to.equal(false);
  // })

});


describe("checkEmpty", function(){
  it("is going to throw an alert if string is empty", function(){
    expect(checkEmpty("")).to.equal(true);
  });
});
