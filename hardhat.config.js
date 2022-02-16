require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: './config.env' });

const projectId = process.env.INFURA_PROJECT_ID;
const privateKey = process.env.WALLET_PRIVATE_KEY;

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
