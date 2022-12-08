const { ethers } = require("ethers");

const INFURA_ID = "6ad32fe8f2d64de4b501ab527cc49740";

const provider = new ethers.providers.JsonRpcProvider(
 `https://mainnet.infura.io/v3/${INFURA_ID}`
);

const callFunction = async () => {
 const dataCalled = await provider.call({
  // contrato al que llamamos
  to: "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41",
  // `function addr(namehash("ricmoo.eth")) view returns (address)`
  data:
   "0x3b3b57debf074faa138b72c65adbdcfb329847e4f2c04bde7f7dd7fcad5a52d2f395a558",
 });
 console.log(dataCalled);
};

callFunction();
