let Block = require("./Block.js");


class Blockchain {
    constructor() {
        this.genesisBlock = this.createGenesisBlock();
        this.blocks = [this.genesisBlock];
    }

    createGenesisBlock() {
        return new Block(0, this.blocks, null, Date.now(), "Genesis block");
    }

    getTheLatestBlock() {
        return this.blocks[this.blocks.length - 1];
    }

    addNewBlock(newBlock) {
        newBlock.previousBlock = this.getTheLatestBlock().hash;
        newBlock.hash = newBlock.generateHash();
        this.blocks.push(newBlock);
    }
}

module.exports = Blockchain;