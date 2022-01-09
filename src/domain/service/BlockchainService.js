import BlockChain from "../entity/blockchain"

export default class BlockchainService {

    #blockChainBusiness
    constructor(blockChainBusiness) {
        this.#blockChainBusiness = blockChainBusiness
    }

    createBlockChain = () => {
        let blockChain = BlockChain.getInstance()
        if (!blockChain) {
            blockChain = this.#blockChainBusiness.createBlockChain()
        }
        return blockChain
    }

}