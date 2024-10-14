import os from 'os';

const getSystemUsername = () => {
  const userInfo = os.userInfo();
  console.log(`Current system user name is ${userInfo.username}`);
};

export default getSystemUsername;
