import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("ERC721Staking");
  const contract = await Contract.deploy();
  contract.deployed();

  console.log(`The Erc721 Staking contract is deployed on ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
