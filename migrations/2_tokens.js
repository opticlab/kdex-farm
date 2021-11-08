const CakeToken = artifacts.require("CakeToken");
const SyrupBar = artifacts.require("SyrupBar");

module.exports = async function(deployer) {
    await deployer.deploy(CakeToken)
    await CakeToken.deployed()
    
    await deployer.deploy(SyrupBar, CakeToken.address)
    await SyrupBar.deployed()
};
