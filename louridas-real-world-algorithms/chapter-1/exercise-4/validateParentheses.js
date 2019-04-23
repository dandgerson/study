const Stack = require('../exercise-1/stack');

const parentVal = (string) => {
  if (typeof string !== 'string') throw new TypeError('string was expected as parameter');
  const template = /[\)\(\}\{\]\[\>\<]/;
  const parentMap = {
    ')': '(',
    '}': '{',
    ']': '[',
    '>': '<',
  };
  const stack = new Stack();
  for (let i = 0; i < string.length; i += 1) {
    if (template.test(string[i])) {
      if (stack.isEmpty() && parentMap[string[i]]) return false;
      if (!parentMap[string[i]]) stack.push(string[i]);
      else if (parentMap[string[i]] && stack.top() === parentMap[string[i]]) stack.pop();
      else return false;
    }
  }
  if (!stack.isEmpty()) return false;
  return true;
};

module.exports = parentVal;
