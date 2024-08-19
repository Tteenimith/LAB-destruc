// import { sayGoodbye as g } from "./modules1.js"
// import { Hello as hi } from "./modules1.js"

import * as say from "./modules1.js"

import helloJS from "./modules2.js"


function sayHi(){
    console.log('hello modules')
}

sayHi()
say.sayGoodbye()
say.sayHello()
helloJS()