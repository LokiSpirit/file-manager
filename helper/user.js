const User = () => {
  const usernameArg = process.argv.find((arg) => arg.startsWith('--username='));
  const username = usernameArg ? usernameArg.split('=')[1] : 'User';
  return username;
};

export const USER = User();
