"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkenLists = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkenLists extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        ;
        tail.next = node;
    }
    get length() {
        if (!this.head) {
            return 0;
        }
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }
    at(index) {
        let counter = 0;
        if (!this.head) {
            throw new Error('Index out of bound Exception');
        }
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bound Exception');
    }
    compare(leftindex, rightindex) {
        return this.at(leftindex).data > this.at(rightindex).data;
    }
    swap(leftindex, rightindex) {
        const temp = this.at(leftindex).data;
        this.at(leftindex).data = this.at(rightindex).data;
        this.at(rightindex).data = temp;
    }
    print() {
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkenLists = LinkenLists;
