const { assert } = require('chai');

const simpleStackStockSpan = require('../../../louridas-real-world-algorithms/chapter-1/simpleStackStockSpan');

describe('simpleStackStockSpan', () => {
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
    assert.typeOf(simpleStackStockSpan, 'function');
    done();
  });
  it('should returns an array', (done) => {
    assert.typeOf(simpleStackStockSpan(quotes), 'array');
    done();
  });
  it('should returns expected array', (done) => {
    quotes = [99, 86, 104, 187, 99];
    assert.deepEqual(simpleStackStockSpan(quotes), [1, 1, 3, 4, 1]);
    done();
  });
});
