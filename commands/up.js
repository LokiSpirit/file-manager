import path from 'path';
import { CURRENT_PATH } from '../helper/currentPath.js';

const goUp = () => {
  const currentDirectory = CURRENT_PATH.getCurPath();
  const newDir = path.resolve(currentDirectory, '..');

  if (newDir !== path.parse(currentDirectory).root) {
    CURRENT_PATH.setCurPath(newDir);
    console.log(`You are currently in ${newDir}`);
  } else {
    console.log('You are currently at the root directory');
  }
};

export default goUp;
