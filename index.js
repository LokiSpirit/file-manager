import { CURRENT_PATH } from './helper/currentPath.js';
import { run } from './helper/run.js';
import { USER } from './helper/user.js';

console.log(`Welcome to the File Manager, ${USER}!`);

process.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${USER}, goodbye!`);
  process.exit();
});

console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);

run();
