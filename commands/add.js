import fs from 'fs/promises';
import path from 'path';
import { CURRENT_PATH } from '../helper/currentPath.js';

const createFile = async (fileName) => {
  const filePath = path.join(CURRENT_PATH.getCurPath(), fileName);

  try {
    await fs.writeFile(filePath, '', 'utf8');
    console.log(`File ${fileName} created successfully`);
  } catch (err) {
    console.log('Operation failed');
  } finally {
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
  }
};

export default createFile;
