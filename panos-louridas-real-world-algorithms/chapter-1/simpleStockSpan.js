const simpleStockSpan = (quotes) => {
  const spans = new Array(quotes.length);
  for (let i = 0; i < quotes.length; i += 1) {
    let k = 1;
    let spanEnd = false;

    while (i - k >= 0 && !spanEnd) {
      if (quotes[i - k] <= quotes[i]) k += 1;
      else spanEnd = true;
    }
    spans[i] = k;
  }
  return spans;
};

module.exports = simpleStockSpan;
