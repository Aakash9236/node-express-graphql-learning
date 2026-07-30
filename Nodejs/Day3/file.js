// const { error } = require('console')
// const fs = require('fs')

// // fs.writeFileSync("hello.txt", "Hello I am Backend Developer");

// /* upper code will create a file hello.js and write a message
// is wr update the message it will override the message
// */

// fs.writeFile("helloAsync.txt", "Hello I am Async file you have to handle me ", (err) => { })


// ------------------------------------------------------------------------------------------------------------------------------------------

// Read file


// Sync

// const fs = require('fs')

// const fileData = fs.readFileSync("./hello.txt", "utf-8")
// console.log(fileData)



//async


// const fs = require('fs')

// fs.readFile('./helloAsync.txt', 'utf-8', (err, result) => {
//   if (err) {
//     console.log("Error is comming", err)
//   } else {
//     console.log(result)
//   }
// })


// _----------------------------------------------------------------------------------------------------------------------------------------------_____________________________________________________________________________________________________________________________________________


// const fs = require('fs')

// console.log(fs.statSync('./hello.txt').isFile());




// _----------------------------------------------------------------------------------------------------------------------------------------------_____________________________________________________________________________________________________________________________________________

//delete


// const fs = require('fs')

// fs.unlinkSync('./test')// delete testfile

// _----------------------------------------------------------------------------------------------------------------------------------------------_____________________________________________________________________________________________________________________________________________

// copy file




// const fs = require('fs')


// fs.cpSync('./hello.txt', './test.txt')
// const result = fs.readFileSync('./test.txt', 'utf-8')
// console.log(result)



// _----------------------------------------------------------------------------------------------------------------------------------------------_____________________________________________________________________________________________________________________________________________



// this will create directory

const fs = require('fs')

fs.mkdirSync('Vishal')

fs.mkdirSync('Aakash/a/b', { recursive: true })