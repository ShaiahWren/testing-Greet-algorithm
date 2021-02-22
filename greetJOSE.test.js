
const Greet = require('./greet');

test('greets JOSE', () => {
    expect(Greet('JOSE')).toBe('HELLO, JOSE.');
  });
