import os from 'os';

const getArchitecture = () => {
  console.log(`CPU Architecture: ${os.arch()}`);
};

export default getArchitecture;
