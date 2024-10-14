import fs from 'fs/promises';
import copyFile from './cp.js';
import path from 'path';
import { CURRENT_PATH } from '../helper/currentPath.js';

const moveFile = async (filePath, destDir) => {
  const absoluteFilePath = path.isAbsolute(filePath)
    ? filePath
    : path.join(CURRENT_PATH.getCurPath(), filePath);

  try {
    copyFile(filePath, destDir);
    await fs.unlink(absoluteFilePath);
    console.log(`File moved to ${destDir}`);
  } catch (err) {
    console.log('Operation failed');
  } finally {
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
  }
};

export default moveFile;
