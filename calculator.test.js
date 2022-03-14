const calculator = require('./app.js');

test('Two or more numbers should return the respective calculated operation provided', () => {

    expect(calculator.reverse_polish_notation('6,3,*')).toBe(18);

});