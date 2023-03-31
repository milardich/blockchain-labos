const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, genesisBlock, previousBlock, timestamp, data) {
        this.index = index;
        this.genesisBlock = genesisBlock;
        this.previousBlock = previousBlock;
        this.timestamp = timestamp;
        this.hash = this.generateHash();
        this.data = data;
    }

    generateHash() {
        return SHA256(this.timestamp + this.previousHash).toString();
    }
}

module.exports = Block;