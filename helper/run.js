import { createInterface } from 'node:readline';
import { USER } from '../helper/user.js';
import goUp from '../commands/up.js';
import changeDirectory from '../commands/cd.js';
/*
export const run = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    const [command, ...args] = input.trim().split(' ');

    switch (command) {
      case 'up':
        goUp();
        break;
      case 'cd':
        changeDirectory(args[0]);
        break;
      case 'ls':
        listDirectory();
        break;
      case 'cat':
        readFile(args[0]);
        break;
      case 'add':
        createFile(args[0]);
        break;
      case 'rn':
        renameFile(args[0], args[1]);
        break;
      case 'cp':
        copyFile(args[0], args[1]);
        break;
      case 'mv':
        moveFile(args[0], args[1]);
        break;
      case 'rm':
        deleteFile(args[0]);
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
    }
  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${USER}, goodbye!`);
  });
};
 */

export const run = () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', async (input) => {
    const [command, ...args] = input.trim().split(' ');

    switch (command) {
      case 'up':
        goUp();
        break;
      case 'cd':
        await changeDirectory(args[0]);
        break;
      case 'ls':
        listDirectory();
        break;
      case 'cat':
        readFile(args[0]);
        break;
      case 'add':
        createFile(args[0]);
        break;
      case 'rn':
        renameFile(args[0], args[1]);
        break;
      case 'cp':
        copyFile(args[0], args[1]);
        break;
      case 'mv':
        moveFile(args[0], args[1]);
        break;
      case 'rm':
        deleteFile(args[0]);
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
    }
  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${USER}, goodbye!`);
  });
};
