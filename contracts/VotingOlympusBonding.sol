//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract VotingOlympusBonding {

    // Info for bond holder
    struct Bond {
        uint payout; // payout token remaining to be paid
        uint vesting; // Blocks left to vest
        uint lastBlock; // Last interaction
        uint truePricePaid; // Price paid (principal tokens per payout token) in ten-millionths - 4000000 = 0.4
    }

    function getUnderlyingALCXTokens(address account) external view returns (uint256){
        CustomBond bond = CustomBond(0x1e5b7412f4B4B713b93D0e82260BD27810984B6e);
        return bond.bondInfo(account).payout;
    }
}

interface CustomBond {
    // Info for bond holder
    struct Bond {
        uint payout; // payout token remaining to be paid
        uint vesting; // Blocks left to vest
        uint lastBlock; // Last interaction
        uint truePricePaid; // Price paid (principal tokens per payout token) in ten-millionths - 4000000 = 0.4
    }

    function bondInfo(address) external view returns(Bond memory);
}
