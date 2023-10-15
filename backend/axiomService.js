import { Axiom, AxiomConfig } from "@axiom-crypto/core";

const config: AxiomConfig = {
    providerUri: "https://sepolia-rpc.scroll.io",
    version: "v1",
    chainId: 534351,
    mock: true,
}

const ax = new Axiom(config);

async function buildAndSendQuery(contractAddress, eventName) {
    const qb = ax.newQueryBuilder();
    await qb.append({blockNumber: 9221524, address: contractAddress, topic: keccak256(eventName)});
    const {keccakQueryResponse, queryHash, query} = await qb.build();
    const txResult = await axiomV1Query.sendQuery(keccakQueryResponse, refundAddress, query, {value: ethers.parseEther("0.01")});
    const txReceipt = await txResult.wait();
    return txReceipt;
}

export { buildAndSendQuery };
