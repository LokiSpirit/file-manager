import fs from 'fs';
import path from 'path';
import { CURRENT_PATH } from '../helper/currentPath.js';
import welcome from '../helper/welcome.js';

const copyFile = (filePath, destDir) => {
  const absoluteFilePath = path.isAbsolute(filePath)
    ? filePath
    : path.join(CURRENT_PATH.getCurPath(), filePath);
  const destPath = path.isAbsolute(destDir)
    ? destDir
    : path.join(CURRENT_PATH.getCurPath(), destDir);
  const destFilePath = path.join(destPath, path.basename(filePath));

  const readableStream = fs.createReadStream(absoluteFilePath);
  const writableStream = fs.createWriteStream(destFilePath);

  readableStream.on('error', () => {
    console.log('Operation failed');
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
    welcome();
  });

  writableStream.on('error', () => {
    console.log('Operation failed');
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
    welcome();
  });

  readableStream.pipe(writableStream).on('finish', () => {
    console.log(`File copied to ${destFilePath}`);
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
    welcome();
  });
};

export default copyFile;
