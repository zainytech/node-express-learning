//Modules:
//its a encapsulated code onlby sharing what we want
//node uses a CommonJS:
// every file in node is a module (by default);

const names = require("./names.js");
const sayHi = require("./utils-func.js");
const data = require("./alternative-flavour.js");
require("./module-3/mind-grind.js");
console.log(data);
// console.log(names);
sayHi("newname");
sayHi(names.fname);
sayHi(names.lname);
