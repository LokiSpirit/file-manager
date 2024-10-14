import fs from 'fs';
import path from 'path';
import { CURRENT_PATH } from '../helper/currentPath.js';
import welcome from '../helper/welcome.js';

const readFile = (filePath) => {
  const absolutePath = path.isAbsolute(filePath)
    ? filePath
    : path.join(CURRENT_PATH.getCurPath(), filePath);

  const readableStream = fs.createReadStream(absolutePath, { encoding: 'utf-8' });

  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  readableStream.on('error', () => {
    console.log('Operation failed');
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
    welcome();
  });

  readableStream.on('end', () => {
    console.log();
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
    welcome();
  });
};

export default readFile;
