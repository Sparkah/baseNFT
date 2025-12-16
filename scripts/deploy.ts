import hre from "hardhat";

async function main() {
  // 1. Get the wallet we are deploying with
  // Note: We access ethers via 'hre.ethers'
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  // 2. Get the compiled contract factory
  const ScoreNFT = await hre.ethers.getContractFactory("ScoreNFT");

  // 3. Deploy the contract
  const scoreNFT = await ScoreNFT.deploy();
  await scoreNFT.waitForDeployment();

  // 4. Print the address
  console.log(`ScoreNFT deployed to: ${await scoreNFT.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});