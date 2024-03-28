//OS Module (for interacting with os and server)
// its abuiltin module thats why no need to install it
const os = require("os");

//info about current user
const user = os.userInfo();
// console.log(user);

//method return the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
