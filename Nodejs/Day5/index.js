
/*
const http = require('http')

const createMyServer = http.createServer((req, res) => {
  console.log("A new Request come from client");
  console.log(req)
  res.end("Server received the request");
});

createMyServer.listen(8000, () => {
  console.log("Server Started!!");
})

*/



const http = require("http")
const fs = require('fs')
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()} ${req.url}: new request received from client side \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/": res.end("this is home Page")
        break;
      case "/about": res.end("About me: I am Aakash Kumar gupta ")
        break;
      case "/dashboard": res.end("This is Dashboard page")
        break;
      default: res.end("Error 404 not found any pages")
    }
  })
})

myServer.listen(8000, () => {
  console.log("request received!! on ther server")
})



