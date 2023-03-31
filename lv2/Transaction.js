class Transaction {
    constructor(cryptoAmount, senderAddress, receiverAddress) {
        this.cryptoAmount = cryptoAmount;
        this.senderAddress = senderAddress;
        this.receiverAddress = receiverAddress;
    }
}

module.exports = Transaction;

