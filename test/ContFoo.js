const { expect } = require("chai");
const { testing } = require("../script/testing.js");

describe("VotingOlympusBonding", function () {

    let vars;

    beforeEach(async function () {
        vars = await testing();
    });

    describe("voter testing", async function () {
        it("Update minter", async function () {
            expect(vars.addresses.length === vars.amounts.length)
            for (let i = 0; i < vars.addresses.length; i++){

                console.log(vars.addresses[i])

                console.log(BigInt(await vars.voteProxy.
                getUnderlyingALCXTokens(vars.addresses[i])))

                expect( BigInt(await vars.voteProxy.
                getUnderlyingALCXTokens(vars.addresses[i])))
                    .to.equal(vars.amounts[i])
            }
        });
    });
});