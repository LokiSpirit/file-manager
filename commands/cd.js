import path from 'path';
import fs from 'fs/promises';
import { CURRENT_PATH } from '../helper/currentPath.js';

const changeDirectory = async (newPath) => {
  const absolutePath = path.isAbsolute(newPath)
    ? newPath
    : path.join(CURRENT_PATH.getCurPath(), newPath);

  try {
    await fs.access(absolutePath);

    CURRENT_PATH.setCurPath(absolutePath);
    console.log(`You are currently in ${absolutePath}`);
  } catch (err) {
    console.log('Operation failed');
  }
};

export default changeDirectory;
