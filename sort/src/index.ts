import { NumbersCollections } from "./NumbersCollections";
import { CharacterCollections } from "./CharacterCollections";
import { LinkenLists } from "./LinkedLists";

const numCol = new NumbersCollections([4,7,2,5,1,-22,-90,0]);
numCol.sort();
console.log(numCol.collection);


const charCol = new CharacterCollections('Sanjay');
charCol.sort();
console.log(charCol.collection);

const linLst = new LinkenLists();
linLst.add(5);
linLst.add(7);
linLst.add(6);
linLst.add(2);
linLst.add(-1);
linLst.add(-20);
linLst.sort();
linLst.print();
