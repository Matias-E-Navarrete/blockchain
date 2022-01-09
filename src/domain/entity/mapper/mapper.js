import Block from "../block"
import BlockChain from "../blockchain"

export class MapperEntity {

    static buildBlock(block) {
        const blockCreated = new Block(...block, buildHash(block))
        return blockCreated;
    }
    static buildBlockChain(block) {
        const blockChain = new BlockChain(block);
        return blockChain
    }
}