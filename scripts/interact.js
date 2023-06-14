const hre = require('hardhat');
require('dotenv').config();

const TOKEN_ADDRESS = process.env.CONTRACT_ADDRESS; //SEPOLIA

async function getTokenDetails() {
	const ERCToken = await hre.ethers.getContractAt("MICRODOT", TOKEN_ADDRESS);

	console.log("Token Name: ", await ERCToken.name());
	console.log("Token Symbol: ",  await ERCToken.symbol());
	console.log("Token Supply: ", (await ERCToken.totalSupply()).toString());
}

getTokenDetails().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});