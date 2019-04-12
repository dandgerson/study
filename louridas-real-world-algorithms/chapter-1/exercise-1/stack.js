const Stack = (function closure() {
  const priv = new WeakMap();
  const _ = instance => priv.get(instance);

  class StackClass {
    constructor(maxSize = null) {
      const privatMembers = { data: [] };
      priv.set(this, privatMembers);

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
      return this.getSize() === 0;
    }

    getMaxSize() {
      if (this.maxSize) return this.maxSize;
      throw new Error('The Stack is dynamic.');
    }
  }

  return StackClass;
}());


module.exports = Stack;
