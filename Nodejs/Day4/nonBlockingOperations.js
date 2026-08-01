const fs = require('fs')


function nonBlocking() {

  fs.writeFile("test2.txt", "Hello this is non blocking Operations", (err) => {
    if (err) throw err;
  })

  console.log("1");
  console.log("2");


  fs.readFile("./test2.txt", 'utf-8', (err, result) => {
    if (err) throw err
    console.log(result)
  })


  console.log("3");
  console.log("4");
  console.log("5");
  console.log("6");

}

module.exports = {
  nonBlocking
}