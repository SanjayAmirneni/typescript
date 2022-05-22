import { Sorter } from "./Sorter";

export class CharacterCollections extends Sorter{

    constructor(public collection:string){
        super();
    }


    get length():number {
        return this.collection.length;
    }

    compare(leftindex:number,rightindex:number):boolean {
        return this.collection[leftindex].toLowerCase() > this.collection[rightindex].toLowerCase();
    }

    swap(leftindex:number,rightindex:number):void{
        const characters = this.collection.split('');
        const temp = characters[leftindex];
        characters[leftindex] = characters[rightindex];
        characters[rightindex] = temp;
        this.collection = characters.join('');
    }


}