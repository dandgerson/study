const { assert } = require('chai');

const simpleStockSpan = require('../../../louridas-real-world-algorithms/chapter-1/simpleStockSpan');

describe('simpleStockSpan', () => {
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
    assert.typeOf(simpleStockSpan, 'function');
    done();
  });
  it('should returns an array', (done) => {
    assert.typeOf(simpleStockSpan(quotes), 'array');
    done();
  });
  it('should returns expected array', (done) => {
    quotes = [99, 86, 104, 187, 99];
    assert.deepEqual(simpleStockSpan(quotes), [1, 1, 3, 4, 1]);
    done();
  });
});
