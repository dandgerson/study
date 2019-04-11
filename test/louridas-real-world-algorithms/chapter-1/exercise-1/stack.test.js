const { assert } = require('chai');

const Stack = require('../../../../louridas-real-world-algorithms/chapter-1/exercise-1/stack');

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
    it('should take optional maxSize parameter and save it as a property', (done) => {
      stack = new Stack(100);
      assert.exists(stack.getMaxSize);
      done();
    });
    it('shouldn\'t have maxSize parameter, when is not passed optional maxSize parameter', (done) => {
      assert.notExists(stack.maxSize);
      done();
    });
    it('should throws an Error, when calls getMaxSize when is not passed optional maxSize parameter', (done) => {
      assert.throws(stack.getMaxSize);
      done();
    });
  });

  describe('methods', () => {
    describe('push', () => {
      it('should exists', (done) => {
        assert.exists(stack.push);
        done();
      });
      it('should add new element on the top of the stack', (done) => {
        stack.push(0);
        assert.equal(stack.top(), 0);
        done();
      });
    });
    describe('pop', () => {
      it('should exists', (done) => {
        assert.exists(stack.pop);
        done();
      });
      it('should delete element from the top of the stack', (done) => {
        const element = 1;
        stack.push(0);
        stack.push(element);
        stack.pop();
        assert.equal(stack.top(), 0);
        done();
      });
      it('should throws an Error if Stack is empty', (done) => {
        assert.throws(stack.pop);
        done();
      });
      it('should returns deleted element', (done) => {
        const element = 1;
        stack.push(element);
        assert.equal(stack.pop(), element);
        done();
      });
    });
    describe('top', () => {
      it('should exists', (done) => {
        assert.exists(stack.top);
        done();
      });
      it('should returns top element from the stack', (done) => {
        const element = 1;
        stack.push(element);
        assert.equal(stack.top(), 1);
        done();
      });
      it('should throws an Error if Stack is empty', (done) => {
        assert.throws(stack.top);
        done();
      });
      it('shouldn\'t delete top element', (done) => {
        const element = 1;
        stack.push(element);
        stack.top();
        assert.equal(stack.top(), 1);
        done();
      });
    });
    describe('getSize', () => {
      it('should exists', (done) => {
        assert.exists(stack.getSize);
        done();
      });
      it('should returns quantity of the elements from the stack', (done) => {
        stack.push(0);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        assert.equal(stack.getSize(), 5);
        done();
      });
      it('should returns 0 if the instance initialized with maxSize parameter', (done) => {
        stack = new Stack(100);
        assert.equal(stack.getSize(), 0);
        done();
      });
    });
    describe('isEmpty', () => {
      it('should exists', (done) => {
        assert.exists(stack.isEmpty);
        done();
      });
      it('should returns true if stack has at least one element', (done) => {
        assert.isTrue(stack.isEmpty());
        done();
      });
      it('should returns false if stack has no elements', (done) => {
        stack.push(0);
        assert.isNotTrue(stack.isEmpty());
        done();
      });
    });
    describe('getMaxSize', () => {
      it('should exists', (done) => {
        assert.exists(stack.getMaxSize);
        done();
      });
      it('should throws an Error if instance initialized without maxSize paramenter', (done) => {
        assert.throws(stack.getMaxSize);
        done();
      });
      it('should returns maxSize of the Stack if instance initialized with maxSize paramenter', (done) => {
        stack = new Stack(100);
        assert.equal(stack.getMaxSize(), 100);
        done();
      });
    });
  });
});
