require("@nomiclabs/hardhat-waffle");
require('solidity-coverage')
require("hardhat-gas-reporter");
require('hardhat-spdx-license-identifier');
require("hardhat-interface-generator");

const { ALCHEMY_API_KEY } = require("./key.js");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: ALCHEMY_API_KEY,
        blockNumber: 13410707
      }
    }
  },
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      },
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  gasReporter: {//comment me out to toggle
    enabled: process.env.REPORT_GAS
  }
  // npx hardhat coverage

  // npx hardhat node
  // npx hardhat run --network localhost script/deploy.js
};// yarn hardhat gen-interface <contract name>
