import getEOL from '../helper/eol.js';
import getCpusInfo from '../helper/cpus.js';
import getHomeDirectory from '../helper/homedir.js';
import getSystemUsername from '../helper/username.js';
import getArchitecture from '../helper/architecture.js';
import { CURRENT_PATH } from '../helper/currentPath.js';

const handleOsCommand = (arg) => {
  switch (arg) {
    case '--EOL':
      getEOL();
      break;
    case '--cpus':
      getCpusInfo();
      break;
    case '--homedir':
      getHomeDirectory();
      break;
    case '--username':
      getSystemUsername();
      break;
    case '--architecture':
      getArchitecture();
      break;
    default:
      console.log('Invalid input');
  }
  console.log(`You are currently in ${CURRENT_PATH.getCurPath()}`);
};

export default handleOsCommand;
