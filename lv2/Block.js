const SHA256 = require("crypto-js/sha256");

class Block {
    constructor(index, genesisBlock, previousBlock, timestamp, data) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.genesisBlock = genesisBlock;
        this.previousBlock = previousBlock;
        this.hash = this.generateHash();
    }

    generateHash() {
        return SHA256(this.timestamp + this.previousBlock).toString();
    }
}

module.exports = Block;