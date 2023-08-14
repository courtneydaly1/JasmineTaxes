
describe('Calculate Monthly Rates Function', function() {

  it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8
  }
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 125000,
    years: 5,
    rate: 3.2
  }
  expect(calculateMonthlyPayment(values)).toEqual('2257.21');
});

it('should handle extremely low interest rates', function (){
  const values = {
    amount: 100,
    years: 5.1,
    rate: 0.25
  }
  expect(calculateMonthlyPayment(values)).toEqual('1.65');
  });
});

/// etc
