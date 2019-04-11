const Stack = require('./exercise-1/stack');

const stackStockSpan = (quotes) => {
  const spans = new Array(quotes.length);
  const stack = new Stack();

  spans[0] = 1;
  stack.push(0);

  for (let i = 1; i < quotes.length; i += 1) {
    while (!stack.isEmpty()
      && quotes[stack.top()] <= quotes[i]) stack.pop();
    if (stack.isEmpty()) spans[i] = i + 1;
    else spans[i] = i - stack.top();
    stack.push(i);
  }

  return spans;
};

module.exports = stackStockSpan;
