"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollections = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollections extends Sorter_1.Sorter {
    constructor(collection) {
        super();
        this.collection = collection;
    }
    get length() {
        return this.collection.length;
    }
    compare(leftindex, rightindex) {
        return this.collection[leftindex] > this.collection[rightindex];
    }
    swap(leftindex, rightindex) {
        let temp = this.collection[leftindex];
        this.collection[leftindex] = this.collection[rightindex];
        this.collection[rightindex] = temp;
    }
}
exports.NumbersCollections = NumbersCollections;
