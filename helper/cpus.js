import os from 'os';

const getCpusInfo = () => {
  const cpus = os.cpus();
  console.log(`Overall number of CPUs: ${cpus.length}`);
  cpus.forEach((cpu, index) => {
    console.log(
      `CPU ${index + 1}: Model: ${cpu.model}, Clock Rate: ${(cpu.speed / 1000).toFixed(2)} GHz`,
    );
  });
};

export default getCpusInfo;
