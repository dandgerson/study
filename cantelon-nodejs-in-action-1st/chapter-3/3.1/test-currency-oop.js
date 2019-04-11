const Currency = require('./currency-oop');

const canadianDollar = 0.91;

const currency = new Currency(canadianDollar);
console.log(currency.canadianToUS(50));