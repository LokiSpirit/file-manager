import fs from 'fs';
import path from 'path';
import { CURRENT_PATH } from '../helper/currentPath.js';

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
  });

  readableStream.on('end', () => {
    console.log();
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
  });
};

export default readFile;
