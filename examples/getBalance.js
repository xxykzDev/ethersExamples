const { ethers } = require("ethers");

// API KEY DE INFURA
const INFURA_ID = "INGRESA TU APIKEY O INFURA ID";

// UN PROVIDER ES LA PUERTA DE ENTRADA A LA LECTURA DE LA INFORMACION EN L;LA BLOCKCHAIN
const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

// LA DIRECCION A LA CUAL ESTAMOS REALIZANDO EL FETCH
const address = "0x0Ead685c9658E4cf1744d44305bc8d11c839F7db";

// FUNCION ASYNCRONA QUE PREGUNTARA EL BALANCE DE LA ADDRESS PASADA A TRAVES DE NUESTRO PROVIDER (ACCESS TO READ THE BLOCKCHAIN)
const main = async () => {
 const balance = await provider.getBalance(address);
 // PARSEAMOS EL BIG NUMBER QUE NOS DEVUELVE EL FETCH
 console.log(ethers.utils.formatEther(balance));
};

// EJECUTAMOS NUESTRO METODO
main();
