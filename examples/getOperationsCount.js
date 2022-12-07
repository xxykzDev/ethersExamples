const { ethers } = require("ethers");

// API KEY DE INFURA
const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";

// UN PROVIDER ES LA PUERTA DE ENTRADA A LA LECTURA DE LA INFORMACION EN LA BLOCKCHAIN
const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

// LA DIRECCION A LA CUAL ESTAMOS REALIZANDO EL FETCH
const address = "0x0Ead685c9658E4cf1744d44305bc8d11c839F7db";

// FUNCION ASYNCRONA QUE PREGUNTARA EL BALANCE DE LA ADDRESS PASADA A TRAVES DE NUESTRO PROVIDER (ACCESS TO READ THE BLOCKCHAIN)
const getCountOperations = async () => {
 const countOperations = await provider.getTransactionCount(address);
 console.log(countOperations);
};

// EJECUTAMOS NUESTRO METODO
getCountOperations();
