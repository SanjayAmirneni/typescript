import { Sorter } from './Sorter'

export class NumbersCollections extends Sorter {

    constructor(public collection : number[]) {
        super();
    }


    get length(): number {
        return this.collection.length;
    }

    compare(leftindex:number, rightindex:number): boolean {
        return this.collection[leftindex] > this.collection[rightindex];
    }

    swap(leftindex:number, rightindex:number):void {
        let temp = this.collection[leftindex];
        this.collection[leftindex] = this.collection[rightindex];
        this.collection[rightindex] = temp;
    }
}