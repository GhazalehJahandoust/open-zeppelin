/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-ethers');
require('@openzeppelin/hardhat-upgrades');
const {alchemyApiKey, mnemonic} = require('./secrets.json');
module.exports = {
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: `https://eth-goerli.alchemyapi.io/v2/${alchemyApiKey}`,
            accounts: {mnemonic: mnemonic},
        },
    },
};
