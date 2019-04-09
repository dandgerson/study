const { assert } = require('chai');

const Stack = require('../../../../panos-louridas-real-world-algorithms/chapter-1/exercise-1/stack');

describe('Stack', () => {
  let stack = null;

  beforeEach(() => {
    stack = new Stack();
  });

  it('should be instance of Stack', (done) => {
    assert.instanceOf(stack, Stack);
    done();
  });

  describe('constructor', () => {
    it('should exist data property', (done) => {
      assert.exists(stack.data);
      done();
    });

    it('should take optional maxSize parameter and save it as a property', (done) => {
      stack = new Stack(100);
      assert.exists(stack.maxSize);
      done();
    });
    it('shouldn\'t have maxSize parameter, when is not passed optional maxSize parameter', (done) => {
      assert.notExists(stack.maxSize);
      done();
    });
  });

  describe('methods', () => {
    it('should has push, pop, isEmpty, top, maxSize methods', (done) => {
      assert.exists(stack.push);
      assert.exists(stack.pop);
      assert.exists(stack.isEmpty);
      assert.exists(stack.size);
      assert.exists(stack.top);
      assert.exists(stack.maxSize);
      done();
    });
    describe('push', () => {
      it('should add new element on the top of the stack', (done) => {
        stack.push(0);
        assert.equal(stack.data[0], 0);
        done();
      });
    });
  });
});
