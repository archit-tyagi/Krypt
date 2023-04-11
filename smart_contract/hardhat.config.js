require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.18',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/SP33crp4TdEPCESXVdRNksoBuVQLFvEl',
      accounts: ['00c3ce028b94142a09c72e5346d3306867b2dffabbe2256deea24aef4c2caa70'],
    },
  },
};
