import { buildHash } from "./hasher";

export default class Block {

    constructor(index, timestamp, data, prevHash = "") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.prevHash = prevHash;
        this.nonce = 0;
        this.hash = buildHash(this)
    }

    mine = (level) => {
        while (this.hash.substring(0, level) !== Array(level + 1).join('0')) {
            this.nonce++;
            this.hash = buildHash(this)
        }

        console.log(`Block has been mined in ${this.nonce} times`);
    }
}