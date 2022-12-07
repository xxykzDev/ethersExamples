const { ethers } = require("ethers");

const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";

const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ENSname = "xxykz.eth";

const lookUpAddress = async () => {
 const addressFromENS = await provider.getResolver(ENSName);
 console.log(addressFromENS);
};

lookUpAddress();
