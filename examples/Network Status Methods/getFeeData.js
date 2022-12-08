const { ethers } = require("ethers");

const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";

const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const getFeeData = async () => {
 const feeData = await provider.getFeeData();
 console.log(feeData);
};

getFeeData();
