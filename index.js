const os = require('os');
const path = require('path');

const usernameArg = process.argv.find((arg) => arg.startsWith('--username='));
const username = usernameArg ? usernameArg.split('=')[1] : 'User';

console.log(`Welcome to the File Manager, ${username}!`);

process.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});

let currentDirectory = os.homedir();
console.log(`You are currently in ${currentDirectory}`);
