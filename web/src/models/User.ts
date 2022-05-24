import Eventing from './Eventing'
import Sync from './Sync';
import { Attributes } from './Attributes'



interface Userprops {
    name?:string;
    age?:number;
    id?:number;
}



const rootUrl = 'http://localhost:3000/users'

export class User {



    public events : Eventing = new Eventing();
    public sync : Sync<Userprops> = new Sync<Userprops>(rootUrl);
    public attributes : Attributes<Userprops>

    constructor(attrs: Userprops){
        this.attributes = new Attributes<Userprops>(attrs);
    }
}