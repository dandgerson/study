const simpleStockSpan = (quotes) => {
  const spans = new Array(quotes.length);
  for (let i = 0, k = 1, spanEnd = false; i < quotes.length; i += 1) {
    while (i - k >= 0 && !spanEnd) {
      if (quotes[i - k] <= quotes[i]) k += 1;
      else spanEnd = true;
    }
    spans[i] = k;
  }
  return spans;
};

module.exports = simpleStockSpan;
