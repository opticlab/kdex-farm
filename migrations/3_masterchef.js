const CakeToken = artifacts.require("CakeToken");
const SyrupBar = artifacts.require("SyrupBar");
const MasterChef = artifacts.require("MasterChef");

const devaddr = "0x2C32392E109A82c55030121f11E4bef04D26c117"
const cakePerBlock = 40
const startBlock = 74197300

module.exports = async function(deployer) {
    await deployer.deploy(MasterChef, CakeToken.address, SyrupBar.address, devaddr, cakePerBlock, startBlock)
    const masterChef = await MasterChef.deployed()
    
    CakeToken.deployed().transferOwnership(masterChef.address)
    SyrupBar.deployed().transferOwnership(masterChef.address)
}