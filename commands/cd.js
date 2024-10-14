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
  } catch (err) {
    console.log('Operation failed');
  } finally {
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
  }
};

export default changeDirectory;
