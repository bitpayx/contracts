import { ethers } from "hardhat";
import { parseUnits } from "ethers";

async function main() {
  const initialSupply = parseUnits("1000000", 18); // 1 millón de tokens

  const Token = await ethers.getContractFactory("BitpayXToken");
  const token = await Token.deploy(initialSupply);

  await token.waitForDeployment(); // ✅ en Ethers v6

  console.log(`BitpayXToken deployed at ${token.target}`); // en v6 usa `target` en vez de `address`
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
