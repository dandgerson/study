const Stack = (function closure() {
  const priv = new WeakMap();
  const _ = instance => priv.get(instance);

  class StackClass {
    constructor(maxSize = null) {
      const privatMembers = { data: [] };
      priv.set(this, privatMembers);

      if (maxSize !== null && typeof maxSize !== 'number') throw new TypeError('maxSize must be an integer');
      if (maxSize !== null && !(maxSize > 0)) throw new RangeError('maxSize must be a positive integer');
      this.maxSize = maxSize;
    }

    push(element) {
      if (this.maxSize && _(this).data.length === this.maxSize) throw new Error('The Stack is full.');
      _(this).data.push(element);
    }

    pop() {
      if (this.isEmpty()) throw new Error('The Stack is empty.');
      return _(this).data.pop();
    }

    top() {
      if (this.isEmpty()) throw new Error('The Stack is empty.');
      return _(this).data.slice(-1)[0];
    }

    getSize() {
      return _(this).data.length;
    }

    isEmpty() {
      return _(this).data.length === 0;
    }

    getMaxSize() {
      if (this.maxSize) return this.maxSize;
      throw new Error('The Stack is dynamic.');
    }

    getAll() {
      return _(this).data.slice();
    }
  }

  return StackClass;
}());


module.exports = Stack;
