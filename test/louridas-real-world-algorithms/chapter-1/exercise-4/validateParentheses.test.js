const { assert } = require('chai');

const parentVal = require('../../../../louridas-real-world-algorithms/chapter-1/exercise-4/validateParentheses');

describe('parentVal', () => {
  it('should be a function', (done) => {
    assert.typeOf(parentVal, 'function');
    done();
  });
  it('should throws TypeError exception if passed not string', (done) => {
    const input = 23824389;
    assert.throws(() => parentVal(input), TypeError, 'string was expected as parameter');
    done();
  });
  it('should returns false if parentheses not match', (done) => {
    const input = '([{}}])';
    assert.isFalse(parentVal(input));
    done();
  });
  it('should returns false if parentheses cross over', (done) => {
    const input = '({[}])';
    assert.isFalse(parentVal(input));
    done();
  });
  it('should returns true if parentheses match and not cross over', (done) => {
    const input = '([{<>}]()<>{()})';
    assert.isTrue(parentVal(input));
    done();
  });
  it('should returns false if parentheses not match', (done) => {
    const input = '([])(';
    assert.isFalse(parentVal(input));
    done();
  });
});
