const fs = require('fs')
const path = require('path')
    // // const utils = require('./utils.js')
    // const { myFunc, data } = require('./utils.js') // деструктуризація,витягуємо свойства з об'єкту і записуємо в константу
    // const http = require('http');
    // const fs = require('fs');
    // const path = require('path');
    // // utils.myFunc('Renat');
    // // console.log(utils.data.name)
    // console.log(data);
    // const object = {
    //     name: 'Petia',
    //     age: 15,
    //     Film: ['Borat', 'Bruno']
    // }
    // console.log(JSON.stringify(object));

// const objjson = JSON.stringify(object); //записуємо в константу строку об'єкта
// console.log(objjson);

// console.log(JSON.parse(objjson));
// const notString = JSON.parse(objjson);
// console.log(notString.name);
const http = require('http');

const object = require('./api.json')
let server = http.createServer(function(req, res) {
    // fs.readFile(__dirname + '/', 'utf-8', (err, data) => {
    //     res.writeHead(200, { 'Content-Type': 'text/javascript' });
    //     res.end(obj);
    //     if (err) throw err
    // });

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        console.log(object)
        res.end('ok');



    }
});
server.listen(3000, '127.0.0.1')


console.log("Ми відслідковуємо Port 3000")