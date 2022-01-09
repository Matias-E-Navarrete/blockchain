import { buildHash } from "../../shared/hasher";
import Block from "./block";

export default class BlockChain {

    instance = null;

    constructor(block) {
        if (instance)
            throw new Error("You can only create one instance!");
        this.level = 6;
        const genesisBlock = new Block(...block);
        genesisBlock.mine(this.level);
        this.chain = [genesisBlock]
        this.instance = this;
    }

    static getInstance() {
        return this;
    }


    createBlock = (data) => {
        const lastBlock = this.getLastBlock();
        const newBlock = new Block(lastBlock.index + 1, new Date().getTime(), data, lastBlock.hash)
        newBlock.mine(this.level)
        this.addBlock(newBlock)
    }

    addBlock = (newBlock) => {
        const lastBlock = this.getLastBlock();
        if (lastBlock.index + 1 !== newBlock.index) console.log('Invalid Block')
        else if (lastBlock.hash !== newBlock.prevHash) console.log('Invalid Hash')
        else if (newBlock.hash !== buildHash(newBlock)) console.log('The Block has not been mined')
        else this.chain.push(newBlock);
    }

    getLastBlock = () => this.chain[this.chain.length - 1];

    print = () => this.chain.forEach(block => console.log(`${JSON.stringify(block)}\n`))

}