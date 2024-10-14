import { createInterface } from 'node:readline';
import { USER } from '../helper/user.js';
import { CURRENT_PATH } from '../helper/currentPath.js';
import goUp from '../commands/up.js';
import changeDirectory from '../commands/cd.js';
import listDirectory from '../commands/ls.js';
import readFile from '../commands/cat.js';
import createFile from '../commands/add.js';
import renameFile from '../commands/rn.js';
import moveFile from '../commands/mv.js';
import copyFile from '../commands/cp.js';
import deleteFile from '../commands/rm.js';
import calculateHash from '../commands/hash.js';
import compressFile from '../commands/compress.js';
import decompressFile from '../commands/decompress.js';
import handleOsCommand from '../commands/os.js';

export const run = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', async (input) => {
    const [command, ...args] = input.trim().split(' ');
    console.log('Please wait...');
    switch (command) {
      case 'up':
        goUp();
        break;
      case 'cd':
        await changeDirectory(args[0]);
        break;
      case 'ls':
        await listDirectory();
        break;
      case 'cat':
        readFile(args[0]);
        break;
      case 'add':
        await createFile(args[0]);
        break;
      case 'rn':
        await renameFile(args[0], args[1]);
        break;
      case 'cp':
        copyFile(args[0], args[1]);
        break;
      case 'mv':
        await moveFile(args[0], args[1]);
        break;
      case 'rm':
        await deleteFile(args[0]);
        break;
      case 'os':
        handleOsCommand(args[0]);
        break;
      case 'hash':
        calculateHash(args[0]);
        break;
      case 'compress':
        compressFile(args[0], args[1]);
        break;
      case 'decompress':
        decompressFile(args[0], args[1]);
        break;
      case '.exit':
        rl.close();
        break;
      default:
        console.log('Invalid input');
        console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
    }
    console.log();
    console.log('Enter your command please:');
  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${USER}, goodbye!`);
  });
};
