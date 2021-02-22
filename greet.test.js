
const Greet = require('./greet');

describe('Greet', () => {
  it('should be called', () => {
    const greet = jest.fn();
    Greet(greet('Shaiah'))
    expect(greet).toBeCalled();
  });
});


