
const Greet = require('./greet');

test('greets undefined', () => {
    expect(Greet()).toBe('Hello there.');
  });
