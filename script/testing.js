const {BigNumber} = require("ethers");
const testing = async function() {
    // setup
    let [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
    const balance = await owner.getBalance();

    // test
    let contract = await ethers.getContractFactory("VotingOlympusBonding");
    const voteProxy = await contract.deploy();

    // address set up
    const addresses = [
        "0xeeec0e4927704ab3bbe5df7f4effa818b43665a3",
        "0x4a8b9e2c2940fdd39aceb384654dc59acb58c337",
        "0x2aaa03a8293053bd4b7fa1740ac94d935c66ee84",
    ]

    const amounts = [
        BigInt("97438481524715894550"),
        BigInt("63708084756425114303"),
        BigInt("76651400381266065720"),
    ]

    return {
        voteProxy,
        addresses,
        amounts,
        balance,
        owner,
        addr1,
        addr2,
        addr3,
        addrs
    };
}

module.exports = {
    testing
}