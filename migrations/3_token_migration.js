const Link = artifacts.require("Link");
const Dex = artifacts.require("Dex");

module.exports = async function(deployer) {
  await deployer.deploy(Link);
};
