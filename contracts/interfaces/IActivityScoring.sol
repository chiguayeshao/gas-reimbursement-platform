pragma solidity ^0.8.0;

import "@axiom-org/axiom-contracts/contracts/IAxiomV1Query.sol";

interface IActivityScoring {
    function verifyAndScore(
        bytes32 keccakBlockResponse,
        bytes32 keccakAccountResponse,
        bytes32 keccakStorageResponse,
        IAxiomV1Query.BlockResponse[] calldata blockResponses,
        IAxiomV1Query.AccountResponse[] calldata accountResponses,
        IAxiomV1Query.StorageResponse[] calldata storageResponses
    ) external view returns (uint256);

    function getUserActivity(
        address contractAddress,
        string calldata eventName,
        address userAddress
    ) external view returns (uint256);
}
