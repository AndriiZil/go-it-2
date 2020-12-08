const { sum, returnString } = require('./moduleFile');
const { main } = require('./app');

const { getData, getUser } = require('./example');

require('./test');
require('./test');
require('./test');

console.log(sum(5, 2));

console.log(returnString());

console.log(main());

console.log(getData());

console.log(getUser());
