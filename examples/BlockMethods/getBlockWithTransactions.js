const { ethers } = require("ethers");

const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";

const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const blockNumber = 1000007;

const getBlockWithTransactions = async () => {
 const blockWithTransactions = await provider.getBlockWithTransactions(
  blockNumber
 );
 console.log(blockWithTransactions);
};

getBlockWithTransactions();
