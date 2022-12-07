const { ethers } = require("ethers");

const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";

const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const address = "0x8c38c92860a91B06D39b2D42cefA4abE24b82137";

const getResolver = async () => {
 const resolver = await provider.getResolver(address);
 console.log(resolver);
};

getResolver();
