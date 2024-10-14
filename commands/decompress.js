import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { CURRENT_PATH } from '../helper/currentPath.js';
import welcome from '../helper/welcome.js';

const decompressFile = (filePath, destinationPath) => {
  const absoluteFilePath = path.isAbsolute(filePath)
    ? filePath
    : path.join(CURRENT_PATH.getCurPath(), filePath);
  const absoluteDestPath = path.isAbsolute(destinationPath)
    ? destinationPath
    : path.join(CURRENT_PATH.getCurPath(), destinationPath);

  const readableStream = fs.createReadStream(absoluteFilePath);
  const writableStream = fs.createWriteStream(absoluteDestPath);
  const brotli = zlib.createBrotliDecompress();

  readableStream
    .pipe(brotli)
    .pipe(writableStream)
    .on('finish', () => {
      console.log(`File decompressed to ${absoluteDestPath}`);
      console.log();
      console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
      welcome();
    })
    .on('error', () => {
      console.log('Operation failed');
      console.log();
      console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
      welcome();
    });
};

export default decompressFile;
