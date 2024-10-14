import fs from 'fs/promises';
import { CURRENT_PATH } from '../helper/currentPath.js';

const listDirectory = async () => {
  const currentDirectory = CURRENT_PATH.getCurPath();
  try {
    const items = await fs.readdir(currentDirectory, { withFileTypes: true });

    let directories = [];
    let files = [];

    items.forEach((item) => {
      if (item.isDirectory()) {
        directories.push(item.name);
      } else {
        files.push(item.name);
      }
    });

    directories.sort();
    files.sort();

    directories = directories.map((item) => ({
      Name: item,
      Type: 'directory',
    }));

    files = files.map((item) => ({
      Name: item,
      Type: 'file',
    }));

    const sortedItems = [...directories, ...files];

    console.table(sortedItems);
  } catch (err) {
    console.log('Operation failed');
  } finally {
    console.log(`You are currently in ${currentDirectory}`);
  }
};

export default listDirectory;
