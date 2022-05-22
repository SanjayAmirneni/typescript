"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollections = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollections extends Sorter_1.Sorter {
    constructor(collection) {
        super();
        this.collection = collection;
    }
    get length() {
        return this.collection.length;
    }
    compare(leftindex, rightindex) {
        return this.collection[leftindex].toLowerCase() > this.collection[rightindex].toLowerCase();
    }
    swap(leftindex, rightindex) {
        const characters = this.collection.split('');
        const temp = characters[leftindex];
        characters[leftindex] = characters[rightindex];
        characters[rightindex] = temp;
        this.collection = characters.join('');
    }
}
exports.CharacterCollections = CharacterCollections;
