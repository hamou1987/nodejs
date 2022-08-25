# Tutoriel NodeJs

## 1 - Installer Node
***

## 2 - Commandes

`npm init`
`npm i -g nodemon`
***
## 3 - Script NPM

`"dev": "nodemon server.js"`
***

## 4 - Create module

+ - Créer fichier module.js<p>
+ - Ajouter :

```js
module.exports = {
    stat: 5,
    log() {
        console.log("Le module fonctionne");
    }
}
```

+ - Dans server.js => ajouter

```js
const test = require('./module');
console.log(test.stat);
test.log()
```
***
## 5 - Global objects

    __dirname
    __filename
    module
    require()
    process

***

## 4 - Serveur

Create server.js
Ajouter boilerplate :

```js
const http = require("http");

const server = http.createServer(function (req, res) {
  res.write("Hello World!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server listen port 3000");
});
```
***
## 5 - Start serveur

`npm run serv`
***

## 6 - Main modules

http url querystring path fs util
