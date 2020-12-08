const [ operator, ...numbers ] = process.argv.slice(2);

console.log(operator);

console.log(numbers);

switch (operator) {
    case 'sum':
        console.log(numbers.reduce((acc, num) => acc + parseFloat(num), 0))
        break;
    case 'deduct':
        console.log(numbers.reduce((acc, num) => parseFloat(acc) - parseFloat(num)));
        break;
    default:
        throw new Error('Unknown operator.');
}

console.log(process.argv)
