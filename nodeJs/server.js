const myModule = require('./module');
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const axios = require('axios');

// console.log(myModule.stat);
// myModule.log()

// (function (exports, require, module, __filename, __dirname) {  

// });



const requestHandler = async (req, res) => {
  // res.send("Hello World!");

  let url = req.url;

  if (url === '/path') {


    // res.end(JSON.stringify({ a: path.join(__dirname, "img", "image.img") }));

    res.end(JSON.stringify({ a: path.parse(__dirname) }));


  } else if(url == '/crypto') {

    const pass = crypto.pbkdf2Sync('secret', 'salt', 100_000, 64, 'sha512');

    res.write(pass.toString('hex'))
    res.end()

  } else if (url === '/stream') {

    const stream = fs.createWriteStream(path.join(__dirname, './stream.txt'));

    const response = await axios.get({'url' : 'https://www.google.com/', 'reponseType': 'stream'});
      
    response.pipe(stream);



  } else {

    fs.readFile('./index.html', null, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.write(data);
      }
      res.end();
    })

  }



}


http.createServer(requestHandler).listen(3000, () => console.log("Server listen port 3000"));