pragma solidity ^0.8.0;

import "@axiom-org/axiom-contracts/contracts/IAxiomV1Query.sol";

contract ActivityScoring {
    IAxiomV1Query public axiomV1Query;
    address public axiomV1QueryAddress = 0x34a62692915a242441b2135c9c5e115d38b14e96;

    // To store user activity data obtained from Axiom
    mapping(address => bytes32) public userActivityData;

    constructor() {
        axiomV1Query = IAxiomV1Query(axiomV1QueryAddress);
    }

    function verifyAndScore(bytes32 keccakBlockResponse, bytes32 keccakAccountResponse, bytes32 keccakStorageResponse,
        IAxiomV1Query.BlockResponse[] memory blockResponses,
        IAxiomV1Query.AccountResponse[] memory accountResponses,
        IAxiomV1Query.StorageResponse[] memory storageResponses
    ) public view returns (uint256) {
        // Verify the responses
        bool valid = axiomV1Query.areResponsesValid(
            keccakBlockResponse,
            keccakAccountResponse,
            keccakStorageResponse,
            blockResponses,
            accountResponses,
            storageResponses
        );

        if (!valid) {
            revert("Invalid responses");
        }

        // Calculate activity score
        uint256 activityScore = accountResponses.length;

        return activityScore;
    }

    function getUserActivity(
        address contractAddress,
        string memory eventName,
        address userAddress
    ) public view returns (uint256) {
        // Assuming activity score data is available for the user
        bytes32 activityData = userActivityData[userAddress];
        require(activityData != bytes32(0), "No activity data available");

        // Simplified: convert activity data to a uint256
        uint256 activityScore = uint256(activityData);
        return activityScore;
    }
}
