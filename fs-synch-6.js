//synchronous functions of fs module
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)

writeFileSync('./content/resultSync.txt',`Result:${first} ${second}`,{flag:'a'}) //flag is an option opobject that is used to not overwrite file completely but append the new result into it.
