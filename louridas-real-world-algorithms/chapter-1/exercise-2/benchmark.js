const simpleStockSpan = require('../simpleStockSpan');
const stackStockSpan = require('../stackStockSpan');
const simpleStackStockSpan = require('../simpleStackStockSpan');

const doWork = (entries, funcs) => {
  const entry = Array.from(
    { length: entries },
    () => Math.ceil(Math.random() * entries),
  );

  return funcs.reduce((acc, current) => acc.concat(Array.from(
    { length: entries },
    () => {
      const start = new Date();
      current(entry);
      return new Date() - start;
    },
  ).reduce((subAcc, subCurrent) => subAcc + subCurrent, 0) / entries), []);
};

const entries = 10;
const doneWorks = Array.from(
  { length: entries },
  () => doWork(1000, [
    simpleStockSpan,
    simpleStackStockSpan,
    stackStockSpan,
  ]),
);

const rotate90 = (matrix) => {
  const rotated = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    const row = [];
    for (let j = 0; j < matrix.length; j += 1) {
      row.push(matrix[j][i]);
    }
    rotated.push(row);
  }
  return rotated;
};

const result = rotate90(doneWorks)
  .map(value => +(value.reduce((acc, current) => acc + current, 0) / entries).toFixed(3));

const output = {
  simpleStockSpan: result[0],
  simpleStackStockSpan: result[1],
  stackStockSpan: result[2],
};

console.log(output);
