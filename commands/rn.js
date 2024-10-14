import fs from 'fs/promises';
import path from 'path';
import { CURRENT_PATH } from '../helper/currentPath.js';

const renameFile = async (filePath, newFileName) => {
  const currentFilePath = path.isAbsolute(filePath)
    ? filePath
    : path.join(CURRENT_PATH.getCurPath(), filePath);
  const newFilePath = path.join(path.dirname(currentFilePath), newFileName);

  try {
    await fs.rename(currentFilePath, newFilePath);
    console.log(`File renamed to ${newFileName}`);
  } catch (err) {
    console.log('Operation failed');
  } finally {
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
  }
};

export default renameFile;
