const { assert } = require('chai');

const stackStockSpan = require('../../../panos-louridas-real-world-algorithms/chapter-1/stackStockSpan');

describe('stackStockSpan', () => {
  const quantity = 10;
  const costLimit = 1000;
  let quotes = null;

  beforeEach(() => {
    quotes = Array.from(
      { length: Math.ceil(Math.random() * quantity) },
      () => Math.ceil(Math.random() * costLimit),
    );
  });

  it('should be a function', (done) => {
    assert.typeOf(stackStockSpan, 'function');
    done();
  });
  it('should returns an array', (done) => {
    assert.typeOf(stackStockSpan(quotes), 'array');
    done();
  });
  it('should returns expected array', (done) => {
    quotes = [99, 86, 104, 187, 99];
    assert.deepEqual(stackStockSpan(quotes), [1, 1, 3, 4, 1]);
    done();
  });
});
