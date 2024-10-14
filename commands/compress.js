import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { CURRENT_PATH } from '../helper/currentPath.js';

const compressFile = (filePath, destinationPath) => {
  const absoluteFilePath = path.isAbsolute(filePath)
    ? filePath
    : path.join(CURRENT_PATH.getCurPath(), filePath);
  const absoluteDestPath = path.isAbsolute(destinationPath)
    ? destinationPath
    : path.join(CURRENT_PATH.getCurPath(), destinationPath);

  const readableStream = fs.createReadStream(absoluteFilePath);
  const writableStream = fs.createWriteStream(absoluteDestPath);
  const brotli = zlib.createBrotliCompress();

  readableStream
    .pipe(brotli)
    .pipe(writableStream)
    .on('finish', () => {
      console.log(`File compressed to ${absoluteDestPath}`);
      console.log();
      console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
    })
    .on('error', () => {
      console.log('Operation failed');
      console.log();
      console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
    });
};

export default compressFile;
