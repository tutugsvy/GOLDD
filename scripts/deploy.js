const fs = require("fs");
const hre = require("hardhat");

async function main() {
  const tokenCA = hre.config.TOKEN_CA;
  console.log("Deploying SushiFrogs with token:", tokenCA);
  const SushiFrogs = await hre.ethers.getContractFactory("SushiFrogs");
  const nft = await SushiFrogs.deploy(tokenCA);
  await nft.waitForDeployment();
  const addr = await nft.getAddress();
  console.log("NFT deployed at:", addr);

  const out = { nft: addr, token: tokenCA, deployedAt: new Date().toISOString() };
  fs.writeFileSync(__dirname + "/deployed.json", JSON.stringify(out, null, 2));
  console.log("saved deployed.json");
}

main().catch((e) => { console.error(e); process.exit(1); });