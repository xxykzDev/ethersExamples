const { ethers } = require("ethers");

const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";
const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const address = "0x0Ead685c9658E4cf1744d44305bc8d11c839F7db";

const main = async () => {
 const balance = await provider.getBalance(address);
 console.log(ethers.utils.formatEther(balance));
};

main();
