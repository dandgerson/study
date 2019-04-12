const Stack = (function closure() {
  const priv = new WeakMap();
  const _ = instance => priv.get(instance);

  class StackClass {
    constructor(maxSize) {
      const privatMembers = (maxSize && { data: new Array(maxSize) }) || { data: [] };
      priv.set(this, privatMembers);

      maxSize && (this.maxSize = maxSize);
    }

    push(element) {
      if (this.maxSize) {
        if (this.maxSize < this.getSize() + 1) throw new Error('The Stack is full.');
        _(this).data[this.getSize()] = element;
      } else _(this).data.push(element);
    }

    pop() {
      if (this.isEmpty()) throw new Error('The Stack is empty.');
      if (this.maxSize) {
        const value = _(this).data[this.getSize() - 1];
        _(this).data[this.getSize() - 1] = undefined;
        return value;
      }
      return _(this).data.pop();
    }

    top() {
      if (this.isEmpty()) throw new Error('The Stack is empty.');
      return this.maxSize
        ? _(this).data[this.getSize() - 1]
        : _(this).data.slice(-1)[0];
    }

    getSize() {
      return _(this).data.filter(i => i !== undefined).length;
    }

    _getDataLength() {
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
