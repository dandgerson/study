const Stack = require('../exercise-1/stack');

const rpnCalc = (input) => {
  if (typeof input !== 'string') throw new TypeError('a string was expected');
  if (/(?:[a-z$_][a-z0-9$_]*)|(?:[;={}\[\]\(\)"'!&<>^\\?:])/ig.test(input)) {
    throw new SyntaxError('is not valid data syntax');
  }

  const execOperation = (stack, operator) => {
    const [operand2, operand1] = [+stack.pop(), +stack.pop()];
    switch (operator) {
      case '+':
        stack.push(`${operand1 + operand2}`);
        break;
      case '-':
        stack.push(`${operand1 - operand2}`);
        break;
      case '*':
        stack.push(`${operand1 * operand2}`);
        break;
      case '/':
        stack.push(`${operand1 / operand2}`);
        break;
      default:
        stack.push(`${operand1 % operand2}`);
    }
  };
  const stack = new Stack();

  input.split(' ').forEach((value) => {
    if (/[\+\-\*\/\%]/.test(value)) execOperation(stack, value);
    else stack.push(value);
  });

  return stack.top();
};

module.exports = rpnCalc;
