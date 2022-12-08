const { ethers } = require("ethers");

const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";

const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

// nos retorna el chainID , un id para identificar la blockchain a la que estamos conectados, asi como la direccion de la address que se conecta al provider
const getNetwork = async () => {
 const network = await provider.getNetwork();
 console.log(network);
};

getNetwork();
