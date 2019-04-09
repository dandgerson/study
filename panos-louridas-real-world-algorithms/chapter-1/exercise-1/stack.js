class Stack {
  constructor(maxSize) {
    if (maxSize) {
      this.maxSize = maxSize;
      this.data = new Array(maxSize);
    } else this.data = [];
  }

  push(i) {
    if (this.maxSize && this.maxSize < this.data.length + 1) throw new Error('The Stack is full.');
    this.data.unshift(i);
  }

  pop() {
    if (this.isEmpty()) throw new Error('The Stack is empty.');
    return this.data.shift();
  }

  top() {
    if (this.isEmpty()) throw new Error('The Stack is empty.');
    return this.data[0];
  }

  getSize() {
    return this.data.filter(i => i !== undefined).length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

  getMaxSize() {
    if (this.maxSize) return this.maxSize;
    throw new Error('The Stack is dynamic.');
  }
}

module.exports = Stack;
