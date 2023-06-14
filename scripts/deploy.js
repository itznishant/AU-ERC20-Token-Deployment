const hre = require('hardhat')

async function tokenDeployer() {
  const deployer = await ethers.provider.getSigner(0);
  console.log("Contract Deployer address: ", await deployer.getAddress());

  const Microdot = await hre.ethers.deployContract("MICRODOT");
  await Microdot.waitForDeployment();

  console.log("Token Deployed to address: ", await Microdot.getAddress());
}

tokenDeployer()
  .then(() => process.exit(0))
  .catch((error) => {
  console.error(error);
  process.exit(1);
});