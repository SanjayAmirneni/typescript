import { Sorter } from './Sorter'

class Node {
    next : Node | null = null;
    constructor(public data:number){
    }
}

export class LinkenLists extends Sorter {

    head:Node | null = null;



    add(data:number): void {
        const node= new Node(data);
        if(!this.head){
            this.head=node;
            return;
        }

        let tail = this.head;
        while(tail.next){
            tail = tail.next
        };

        tail.next = node;
    }

    get length():number{

        if(!this.head){
            return 0;
        }

        let count : number = 0;
        let node:Node | null = this.head;
        while(node){
            count++;
            node = node.next;
        }
        return count;
    }

    at(index:number):Node{
        let counter =0;
        if(!this.head){
            throw new Error('Index out of bound Exception');
        }

        let node : Node | null = this.head;
        while(node){
            if(counter===index){
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bound Exception');
    }


    compare(leftindex:number, rightindex:number){
        return this.at(leftindex).data > this.at(rightindex).data;
    }

    swap(leftindex:number, rightindex:number):void{
        const temp = this.at(leftindex).data;
        this.at(leftindex).data = this.at(rightindex).data;
        this.at(rightindex).data = temp
    }

    print():void{
        let node : Node | null = this.head;

        while(node){
            console.log(node.data);
            node = node.next;
        }
    }
}