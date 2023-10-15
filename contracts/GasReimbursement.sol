// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ActivityScoring.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract GasReimbursement is ReentrancyGuard {
    ActivityScoring public activityScoring;
    address[] public projects;
    mapping(address => ProjectSettings) public projectSettings;
    mapping(address => mapping(address => uint256)) public userReimbursement;  // project => user => reimbursement

    event ParametersSet(
        address indexed projectAddress,
        string eventName,
        uint256 totalReimbursementAmount,
        uint256 reimbursementDeadline,
        uint256 reimbursementRatio,
        uint256 reimbursementLimit
    );

    event ReimbursementUpdated(
        address indexed projectAddress,
        address indexed userAddress,
        uint256 reimbursementAmount
    );

    event ReimbursementChecked(
        address indexed userAddress,
        uint256 totalReimbursement
    );

    event ReimbursementClaimed(
        address indexed userAddress,
        uint256 reimbursementAmount
    );

    struct ProjectSettings {
        address projectAddress;
        string eventName;
        uint256 totalReimbursementAmount;
        uint256 reimbursementDeadline;
        uint256 reimbursementRatio;
        uint256 reimbursementLimit;
    }

    constructor(ActivityScoring _activityScoring) {
        activityScoring = _activityScoring;
    }

    function setParameters(
        address projectAddress,
        string memory eventName,
        uint256 totalReimbursementAmount,
        uint256 reimbursementDeadline,
        uint256 reimbursementRatio,
        uint256 reimbursementLimit
    ) public payable {
        require(msg.value >= totalReimbursementAmount, "Not enough ether sent for the reimbursement pool");
        ProjectSettings memory newSettings = ProjectSettings({
            projectAddress: projectAddress,
            eventName: eventName,
            totalReimbursementAmount: totalReimbursementAmount,
            reimbursementDeadline: reimbursementDeadline,
            reimbursementRatio: reimbursementRatio,
            reimbursementLimit: reimbursementLimit
        });
        projectSettings[projectAddress] = newSettings;
        projects.push(projectAddress);
        emit ParametersSet(
            projectAddress,
            eventName,
            totalReimbursementAmount,
            reimbursementDeadline,
            reimbursementRatio,
            reimbursementLimit
        );
    }

    //triggered by external Chainlink Funtion, monitoring events
    function updateReimbursement(
        address projectAddress,
        address userAddress,
        uint256 gasFee
    ) public {
        require(block.timestamp <= projectSettings[projectAddress].reimbursementDeadline, "Reimbursement deadline passed for updates");
        uint256 activity = activityScoring.getUserActivity(
            projectSettings[projectAddress].contractAddress,
            projectSettings[projectAddress].eventName,
            userAddress
        );
        uint256 reimbursementAmount = (activity * gasFee * projectSettings[projectAddress].reimbursementRatio) / 10000; // Assuming reimbursementRatio is a percentage
        userReimbursement[projectAddress][userAddress] += reimbursementAmount;
        emit ReimbursementUpdated(projectAddress, userAddress, reimbursementAmount);
    }

    function checkReimbursement(address userAddress) public returns (uint256[] memory reimbursements, uint256 totalReimbursement) {
        reimbursements = new uint256[](projects.length);
        totalReimbursement = 0;
        for (uint256 i = 0; i < projects.length; i++) {
            address projectAddress = projects[i];
            reimbursements[i] = userReimbursement[projectAddress][userAddress];
            totalReimbursement += reimbursements[i];
        }
        emit ReimbursementChecked(userAddress, totalReimbursement);
    }

    function claimReimbursement(address userAddress) public nonReentrant {
        for (uint256 i = 0; i < projects.length; i++) {
            address projectAddress = projects[i];
            uint256 reimbursementAmount = userReimbursement[projectAddress][msg.sender];
            require(reimbursementAmount > 0, "No reimbursement available");
            userReimbursement[projectAddress][userAddress] = 0;
            payable(userAddress).transfer(reimbursementAmount);
            emit ReimbursementClaimed(userAddress, reimbursementAmount);
        }
    }

    receive() external payable {}
}
