const { nonBlocking } = require("./nonBlockingOperations.js");
const fs = require('fs')

fs.writeFileSync("./test.txt", "Hello I am Aakash")

const result = fs.readFileSync("./test.txt", "utf-8")
console.log(result)

nonBlocking()