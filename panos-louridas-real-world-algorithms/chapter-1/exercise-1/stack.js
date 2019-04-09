class Stack {
  constructor(size) {
    if (size) {
      this.size = size;
      this.data = new Array(size);
    }
    this.data = [];
  }

  push(i) {
    if (this.size && this.size < this.data.length + 1) throw new Error('The Stack is full.');
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

  isEmpty() {
    return this.data.length === 0;
  }

  maxSize() {
    if (this.size) return this.size;
    throw new Error('The Stack is dynamic.');
  }
}

module.exports = Stack;
