import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545", // Red local provista por `npx hardhat node`
    },
    sepolia: {
      url: process.env.ALCHEMY_API_URL, // tu URL RPC de Alchemy al crear un app
      accounts: [process.env.PRIVATE_KEY!] // tu metatask private key esta en Detalles de la cuenta
    }
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY as string,
    }
  }
};

export default config;
