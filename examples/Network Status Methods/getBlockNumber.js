const { ethers } = require("ethers");

const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";

const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

// Retorna el numero de bloque actual de la blockchain a traves de nuestro provider
const getBlockNumber = async () => {
 const blockNumber = await provider.getBlockNumber();
 console.log(blockNumber);
};

getBlockNumber();
