import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

export default {
  default: 'hardhat',
  networks: {
    hardhat: {
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
    },
    dev: {
      url: 'http://localhost:8545',
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk',
      },
    },
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './build/cache',
    artifacts: './build/artifacts',
  },
  gasReporter: {
    currency: 'USD',
    enabled: true,
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: '<api-key>',
  },
};
