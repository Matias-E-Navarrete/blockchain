import BlockChain from "../entity/blockchain";
import { MapperEntity } from "../entity/mapper/mapper";

export default class BlockchainBusines {

    constructor() { }

    blockchainExists = () => BlockChain.getInstance();

    create = () => {
        const genesisBlock = this.genesisBlock();
        const blockChain = MapperEntity.buildBlockChain(genesisBlock);
        return blockChain;
    }

    createGenesisBlock = () => MapperEntity.buildBlock({
        index = 0,
        timestamp = new Date().getTime(),
        data = 'FirstBlock-GeneSiS-000001',
        prevHash = null,
        nonce = 0,
    });

    checkValidBlock = () => { }

}