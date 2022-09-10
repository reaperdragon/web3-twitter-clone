const { ethers } = require("hardhat");
const expect = require("chai").expect;

describe("Twitter App", async function () {
  it("It Should Create the Tweet", async function () {
    const contractFactory = await ethers.getContractFactory("TwitterApp");
    const contractDeploy = await contractFactory.deploy("Twitter");

    await contractDeploy.deployed();

    await contractDeploy.createTweet("First Tweet", "No Media","19 Jun");

    let tweetId = await contractDeploy.getTweet(1);

    expect(tweetId[1]).to.equal("First Tweet");
  });
});
