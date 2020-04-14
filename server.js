const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname+'/public'))

//Express hbs
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine', 'hbs');
 
const port = process.env.PORT || 3000;// HEROKU y en el archivo package.json se agrego el comando start


app.get('/', (req, res) => {
    
    //res.send('Hello World')
    res.render('home',{
        nombre: 'jesus'
    });
});

app.get('/about', (req, res) => {
    
    //res.send('Hello World')
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});