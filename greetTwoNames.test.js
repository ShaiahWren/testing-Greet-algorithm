
const Greet = require('./greet');

test('greets undefined', () => {
    expect(Greet(['Jose', 'Pep'])).toBe('Hello, Jose, Pep.');
  });