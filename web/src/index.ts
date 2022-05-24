import { User } from "./models/User";

const user = new User({name: "Sanjay Amirneni", age: 24});

user.events.on('change',()=>{
    console.log('change');
})

user.events.trigger('change');





