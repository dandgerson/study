const { assert } = require('chai');

const rpnCalc = require('../../../../louridas-real-world-algorithms/chapter-1/exercise-3/rpn-calc');

describe('rpnCalc', () => {
  it('should be a function', (done) => {
    assert.typeOf(rpnCalc, 'function');
    done();
  });
  it('should throws TypeError exception if parameter is not a string', (done) => {
    const input = 5;
    assert.throws(() => rpnCalc(input), TypeError, 'a string was expected');
    done();
  });
  it('should throws SyntaxError exception if string parameter contains not valid symbols', (done) => {
    const input = '2 8 a 7 + ';
    assert.throws(() => rpnCalc(input), SyntaxError, 'is not valid data syntax');
    done();
  });
  it('should return expected value 5', (done) => {
    const input = '1 2 3 * + 2 -';
    assert.equal(rpnCalc(input), '5');
    done();
  });
  it('should return expected value 500', (done) => {
    const input = '100 200 3 * + 200 -';
    assert.equal(rpnCalc(input), '500');
    done();
  });
});
