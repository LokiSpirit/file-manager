import os from 'os';

const getEOL = () => {
  console.log(`System End-Of-Line (EOL): ${JSON.stringify(os.EOL)}`);
};

export default getEOL;
