# BitpayXToken Smart Contract

This project implements a simple ERC-20-like token contract using [Hardhat](https://hardhat.org/). It includes a local testing environment, deployment scripts, and tooling for Ethereum development.

## Running Locally

You can simulate and deploy this contract in a local Ethereum environment provided by Hardhat.

### 1. Start Local Node

This starts a local Ethereum node at `http://127.0.0.1:8545` (Hardhat port default).

```bash
npx hardhat node
```
This command:

- Starts a local Ethereum JSON-RPC server.
- Pre-funds a set of testing accounts with ETH.
- Runs in-memory — resets on each restart.

### 2. Start Local Node
In a second terminal, run:

```bash
npx hardhat run scripts/deploy.ts --network localhost
```
This command:

- Deploys BitpayXToken to the running local network.
- Mints 1,000,000 BPX tokens to the first account.
- Logs the deployed contract address to the console.

## Deploying to Sepolia Testnet

You can deploy the BitpayXToken contract to Sepolia using Alchemy or Infura as a provider.

## 1. Configure .env

Create a .env file with the following:
PRIVATE_KEY=your_metamask_private_key
ALCHEMY_API_KEY=your_alchemy_api_key
ETHERSCAN_API_KEY=your_etherscan_api_key

## 2. Run Deployment

```bash
npx hardhat run scripts/deploy_sepolia.ts --network sepolia
```

You should see output like:
```bash
BitpayXToken deployed to: 0x1782c702F06863A97b1f9B92B8B28158f39BeCC4
```

## 3. Verify on Etherscan

```bash
npx hardhat verify --network sepolia 0x1782c702F06863A97b1f9B92B8B28158f39BeCC4 "1000000000000000000000000"
```
You can view your contract at:
[Sepolia Etherscan](https://sepolia.etherscan.io/address/0x1782c702F06863A97b1f9B92B8B28158f39BeCC4)

