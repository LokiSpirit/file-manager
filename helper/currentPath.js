import os from 'os';
import path from 'path';

const currentPath = () => {
  let currentPath = path.normalize(os.homedir());
  return {
    setCurPath: (path) => (currentPath = path),
    getCurPath: () => currentPath,
  };
};

export const CURRENT_PATH = currentPath();
