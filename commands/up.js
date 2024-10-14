import path from 'path';
import { CURRENT_PATH } from '../helper/currentPath.js';
import welcome from '../helper/welcome.js';

const goUp = () => {
  const currentDirectory = CURRENT_PATH.getCurPath();
  if (currentDirectory === path.parse(currentDirectory).root) {
    console.log('You are currently at the root directory');
  } else {
    const newDir = path.resolve(currentDirectory, '..');
    CURRENT_PATH.setCurPath(newDir);
    console.log(`You are currently in ${newDir}`);
  }
  welcome();
};

export default goUp;
