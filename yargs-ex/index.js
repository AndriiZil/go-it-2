const yargs = require('yargs');

const users = [
    { id: 1, name: 'Jane', surname: 'j' },
    { id: 2, name: 'Mike', surname: 'm' },
    { id: 3, name: 'Ted', surname: 't' },
];

const arg = yargs
    .number('id')
    .string('name')
    .string('surname')
    .alias('name', 'n')
    .alias('surname', 's')
    .argv

const foudedUser = users.filter(user => {
    return (
        checkField('id', user) && checkField('name', user) && checkField('surname', user)
    )
});

function checkField(fieldName, user) {
    return !(arg[fieldName] && arg[fieldName] !== user[fieldName]);
}

console.log(foudedUser);

// node index.js --id=1 --name=Jane -s=t
