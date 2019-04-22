const stackStockSpan = (quotes) => {
  const spans = new Array(quotes.length);
  const stack = [];

  spans[0] = 1;
  stack.push(0);

  for (let i = 1; i < quotes.length; i += 1) {
    while (stack.length
      && quotes[stack[stack.length - 1]] <= quotes[i]) stack.pop();
    if (!stack.length) spans[i] = i + 1;
    else spans[i] = i - stack[stack.length - 1];
    stack.push(i);
  }

  return spans;
};

module.exports = stackStockSpan;
