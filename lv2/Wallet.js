const SHA256 = require("crypto-js/sha256");

class Wallet {
    constructor(name) {
        this.name = name;
        this.privateKey = this.generatePrivateKey();
        this.publicKey = this.generatePublicKey();
    }

    generatePrivateKey() {
        return SHA256(Date.now() + this.name).toString();
    }

    generatePublicKey() {
        return SHA256(Date.now() + this.name).toString();
    }
}

module.exports = Wallet;