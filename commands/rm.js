import fs from 'fs/promises';
import path from 'path';
import { CURRENT_PATH } from '../helper/currentPath.js';

const deleteFile = async (filePath) => {
  const absoluteFilePath = path.isAbsolute(filePath)
    ? filePath
    : path.join(CURRENT_PATH.getCurPath(), filePath);

  try {
    await fs.unlink(absoluteFilePath);
    console.log(`File ${filePath} deleted successfully`);
  } catch (err) {
    console.log('Operation failed');
  } finally {
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
  }
};

export default deleteFile;
