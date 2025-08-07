import { ethers } from "hardhat";

async function main() {
  const BitpayXToken = await ethers.getContractFactory("BitpayXToken");
  const initialSupply = 1_000_000; // 1 millón de tokens
  const token = await BitpayXToken.deploy(initialSupply);
  await token.waitForDeployment();

  console.log("BitpayXToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
