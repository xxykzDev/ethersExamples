const { ethers, providers } = require("ethers");

const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";

const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

// Numero de bloque al que le Drealizamos el fetch
const blockNumber = [1, 2, 3, 100004];

// Obtner informacion del bloque que querramos
const getBlock = async () => {
 for (let index = 0; index < blockNumber.length; index++) {
  const block = await provider.getBlock(blockNumber[index]);
  console.log(block);

  // obtenemos las transacciones de los bloques , ya que es una propiedad del objeto que nos responde la api
  console.log(block.transactions);
 }
};

getBlock();
