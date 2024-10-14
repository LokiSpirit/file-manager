import path from 'path';
import { CURRENT_PATH } from '../helper/currentPath.js';
import welcome from '../helper/welcome.js';

const goUp = () => {
  const currentDirectory = CURRENT_PATH.getCurPath();
  const newDir = path.resolve(currentDirectory, '..');

  if (newDir !== path.parse(currentDirectory).root) {
    CURRENT_PATH.setCurPath(newDir);
    console.log(`You are currently in ${newDir}`);
  } else {
    console.log('You are currently at the root directory');
  }
  welcome();
};

export default goUp;
