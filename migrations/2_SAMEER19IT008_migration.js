const SAMEER19IT008 = artifacts.require("./SAMEER19IT008.sol");
const SAMEER19IT008TokenSale = artifacts.require("./SAMEER19IT008TokenSale.sol");
const tokenPrice = 1000000000000000; // in wei
module.exports = function (deployer) {
  deployer.deploy(SAMEER19IT008,1000000).then(()=>{
    return deployer.deploy(
      SAMEER19IT008TokenSale,
      SAMEER19IT008.address,
      tokenPrice);
  });
};
