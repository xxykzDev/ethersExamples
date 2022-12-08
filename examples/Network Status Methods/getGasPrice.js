const { ethers } = require("ethers");

const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";

const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const getGasPrice = async () => {
 const gasPrice = await provider.getGasPrice();
 // retorna el gasPrice como un big number
 console.log("Gas price sin convertir: =>", gasPrice);
 // retorna el gasPrice parseado de big number, de esta forma es mas legible
 console.log("Gas price convertido: =>", ethers.utils.formatUnits(gasPrice));
};

getGasPrice();
