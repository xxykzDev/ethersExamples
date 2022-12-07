const { ethers } = require("ethers");

const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";

const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const address = "0x0DBE0887D3C2c4c048Ab348A16cbb5543587D4C4";

const getCode = async () => {
 try {
  const code = await provider.getCode(address);
  console.log(code);
 } catch (error) {
  console.log(error);
 }
};

getCode();
