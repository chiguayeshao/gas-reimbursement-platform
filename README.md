## GasGift Reimbursement Protocol (GRP)

### Introduction
GasGift Reimbursement Protocol (GRP) pioneers the first trustless Activity Scoring Protocol on the EVM, integrating the cutting-edge Zero-Knowledge (ZK) technology from Axiom, to create a novel pathway for gas reimbursement initiatives. The Gas Reimbursement Platform, built atop this scoring protocol, emerges as the first of its kind on EVM, offering a trustless gas reimbursement solution, further enhanced by the ZK proofs facilitated through Axiom, ensuring transparency and accuracy in user activity scoring and gas fee reimbursements.

### Architecture
![architecture](https://github.com/chiguayeshao/gas-reimbursement-platform/blob/main/public/architecture.png)

### Problem / Existing Solutions
1. **Escalating Gas Fees**: The gas fees on Ethereum have been skyrocketing, deterring user interactions in crucial sectors like DeFi and NFTs.
2. **Individual Project Reimbursements**: Projects like UniswapX have been reimbursing gas fees independently, indicating the need for a unified platform.
3. **Opaque Activity Metrics**: The lack of a transparent activity scoring system obstructs fair reimbursement to users.
4. **Barrier to Entry**: High gas fees inhibit new user adoption, impeding the mass adoption of decentralized applications.

### Features
- **Dynamic Reimbursement Ratio**: Leveraging GasLockR, the first trustless GasFi protocol, the reimbursementRatio can be dynamically adjusted based on real-time gas price analytics, ensuring a fair reimbursement strategy.
- **Trustless Activity Scoring Protocol**: The heart of GRP, this protocol provides a decentralized and transparent way to measure user activity and engagement on-chain.
- **Real-time Gas Fee Monitoring**: Through Chainlink Adapters, GRP can continuously monitor gas fees ensuring the reimbursement model remains viable and user-centric.
- **Seamless Integration**: Ease of integration with existing projects, enabling them to effortlessly adopt the reimbursement model.
- **Cross-platform Compatibility**: Designed to be adaptable across multiple blockchain platforms enhancing its usability and adoption.
- **ZK-Proofs for Data Verification**: Utilizing Axiom's ZK-technology for on-chain data verification ensuring accurate user activity scoring.

### Use Cases
#### Activity Scoring Protocol:
- **Gas Reimbursement Platform**: Exemplifies the application of the Activity Scoring Protocol in facilitating gas fee reimbursements.
- **User Engagement Metrics**: Projects can derive user engagement metrics to foster community growth and interaction strategies.

#### Gas Reimbursement Platform:
- **DeFi Projects**: Encouraging active liquidity provision by reimbursing gas fees, enticing more users to participate.
- **NFT Marketplaces**: Lowering the cost of trading by reimbursing gas fees for active traders.
- **DAOs**: Incentivizing member participation in voting and proposals through gas fee reimbursements.

### Technical Backbone
- **Axiom**: The GRP leverages Axiom's ZK-technology for on-chain data verification, which is essential for accurately scoring user activity. Within the protocol, the `ActivityScoring` contract interacts with the Axiom service to fetch historical user interaction data from the blockchain. Through a method call to `getUserActivity`, the protocol queries Axiom to obtain and verify on-chain data about user interactions with specific contracts and events. This data, once verified using ZK-proofs, is utilized to compute an activity score for users, which subsequently drives the reimbursement model, ensuring a fair and trustless system for gas fee reimbursements.
- **Chainlink Adapters**: GRP employs Chainlink Adapters to monitor the Scroll Sepolia Testnet and Layer 1 blockchains for occurrences of specified contract events. When such events are detected, the adapter triggers a call to the `updateReimbursement` function in the Gas Reimbursement Platform contract. This function call passes along the necessary data (project address, user address, gas fee) from the detected blockchain event, enabling the protocol to accurately update the reimbursement amounts for users based on their interactions with the projects enlisted in the protocol.

### Live Demo: [GasGift Reimbursement Protocol](https://gas-reimbursement.vercel.app/)
![GasGift](https://github.com/chiguayeshao/gas-reimbursement-platform/blob/main/public/gas-reimbursement.png)

### Demo Vedio: [GasGift Reimbursement Protocol Youtube](https://youtu.be/qSxtGkCf038)

### Github Repo:
    
#### 合约: [Contract Repo](https://github.com/chiguayeshao/Gas-Reimbursement-Contract)
#### 前端: [Frontend Repo](https://github.com/chiguayeshao/gas-reimbursement-platform)


### Conclusion
GRP is a revolutionary solution addressing the challenges of gas fees on Ethereum, promoting user engagement across various sectors like DeFi, NFTs, and DAOs by providing a robust and trustless reimbursement infrastructure.
