const Stack = (function closure() {
  const priv = new WeakMap();
  const _ = instance => priv.get(instance);

  class StackClass {
    constructor(maxSize) {
      const privatMembers = (maxSize && { data: new Array(maxSize) }) || { data: [] };
      priv.set(this, privatMembers);

      maxSize && (this.maxSize = maxSize);
    }

    push(i) {
      if (this.maxSize && this.maxSize < _(this).data.length + 1) throw new Error('The Stack is full.');
      _(this).data.push(i);
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
      return _(this).data.filter(i => i !== undefined).length;
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
