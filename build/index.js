"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    }
}
class BlockChain {
    constructor() {
        this.blocks = [];
    }
    getPrevHash() {
        if (this.blocks.length === 0)
            return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    addBlock(data) {
        if (this.blocks.length === 0)
            return;
        this.blocks.push(new Block(this.getPrevHash(), this.blocks.length + 1, data));
    }
    getBlocks() {
        return this.blocks;
    }
}
const blockchain = new Blockchain();
blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
blockchain.addBlock("Fourth one");
console.log(blockchain.getBlocks());
