const { nonBlocking } = require("./nonBlockingOperations.js");
const fs = require('fs')
const os = require('os')

fs.writeFileSync("./test.txt", "Hello I am Aakash")

const result = fs.readFileSync("./test.txt", "utf-8")
console.log(result)

console.log(os.cpus().length)

nonBlocking()