const { ethers } = require("hardhat");

async function main() {
  const contractFactory = await ethers.getContractFactory("TwitterApp");
  const contractDeploy = await contractFactory.deploy("Twitter App");
  await contractDeploy.deployed();
  console.log(`Contract Deployed at: ${contractDeploy.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
