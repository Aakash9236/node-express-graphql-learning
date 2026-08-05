const http = require('http')
const fs = require('fs')
const url = require('url');
const { appendFile } = require('fs/promises')

const myServer = http.createServer((req, res) => {

  if (req.url === '/favicon.ico') return res.end();
  const log = `${Date.now()} ${req.url}: this is the URL\n`
  const myUrl = url.parse(req.url, true);
  console.log(myUrl)
  fs.appendFile('log.txt', log, (err, data) => {
    switch (myUrl.pathname) {
      case '/': res.end("This is home page");
        break;
      case '/about':
        const username = myUrl.query.name
        res.end(`Hi ${username}`);
        break;
      case '/search':
        const search = myUrl.query.search_query
        if (req.method === 'GET') res.end(`${req.method}`)
        else
          res.end(`${search}`);
        break;
      case '/dashboard': res.end("this is the dashboard page");
        break;
      default: res.end("Page not found 404");
    }
  });
})

myServer.listen(8000, () => {
  console.log("Request recieved successfully");
})


// there is 5 types of http method
// GET;_
//POST
//PUT
//PATCH
//DELETE