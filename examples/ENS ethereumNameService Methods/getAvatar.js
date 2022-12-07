const { ethers } = require("ethers");

const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";

const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const ENSName = "xxykz.eth";

const getAvatarFromENS = async () => {
 const avatar = await provider.getAvatar(ENSName);
 console.log(avatar);
};

getAvatarFromENS();
