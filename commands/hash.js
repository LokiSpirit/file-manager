import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { CURRENT_PATH } from '../helper/currentPath.js';

const calculateHash = (filePath) => {
  const absoluteFilePath = path.isAbsolute(filePath)
    ? filePath
    : path.join(CURRENT_PATH.getCurPath(), filePath);

  const hash = crypto.createHash('sha256');
  const readableStream = fs.createReadStream(absoluteFilePath);

  readableStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readableStream.on('end', () => {
    console.log(`Hash: ${hash.digest('hex')}`);
    console.log();
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
  });

  readableStream.on('error', () => {
    console.log('Operation failed');
    console.log();
    console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
  });
};

export default calculateHash;
