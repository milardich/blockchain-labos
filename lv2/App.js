let Wallet = require("./Wallet.js");
let Blockchain = require("./Blockchain.js");
let Transaction = require("./Transaction.js");
let Block = require("./Block.js");

var wallet1 = new Wallet("profesor");
var wallet2 = new Wallet("student");
var wallet3 = new Wallet("CryptoWhale");

var blockchain = new Blockchain();

var transaction1 = new Transaction(5, wallet1.publicKey, wallet2.publicKey);
var data1 = {
    "amount": transaction1.cryptoAmount,
    "senderAddress": transaction1.senderAddress,
    "receiverAddress": transaction1.receiverAddress
}
var block1 = new Block(
    blockchain.getTheLatestBlock().index + 1,
    blockchain.genesisBlock.hash,
    blockchain.getTheLatestBlock,
    Date.now(),
    data = data1
);
blockchain.addNewBlock(block1);


var transaction2 = new Transaction(572, wallet3.publicKey, wallet1.publicKey);
var data2 = {
    "amount": transaction1.cryptoAmount,
    "senderAddress": transaction1.senderAddress,
    "receiverAddress": transaction1.receiverAddress
}
var block2 = new Block(
    blockchain.getTheLatestBlock().index + 1,
    blockchain.genesisBlock.hash,
    blockchain.getTheLatestBlock,
    Date.now(),
    data = data2
);
blockchain.addNewBlock(block2);

var output = JSON.stringify(blockchain.blocks, null, "    ");

console.log(output);