import express from 'express';
import  handlebars   from 'express-handlebars';
import { engine } from 'express-handlebars';
import path from 'path';
import fs from 'fs';
// import methodOverride from 'method-override';

import IndexRoutes from './routes/index';
import BooksRoutes from './routes/books';
import CarritoRoutes from './routes/carritos';
import ProductosRoutes from './routes/productos';

// Para iniciar 
const app = express();
import './database';
//configuradion

app.set('views',path.join(__dirname, 'views'));

app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'/layouts'),
    partialsDir: path.join(app.get('views'),'/partials'),
    helpers:require('./lib/helpers')
}))

app.set('view engine','hbs');

//servidor que corre
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {console.log(`Servidor corriendo en puerto ${PORT}`);});
app.on('error', err => {console.log(`Algo salio mal: ${err}`);});


// __dirname + '/views/layouts'
//middlewars

app.use(express.json());
app.use(express.urlencoded({extended:false}))
// app.use(methodOverride());

//Routes
app.use('/', IndexRoutes)
app.use('/books', BooksRoutes);
app.use('/carritos', CarritoRoutes);
app.use('/productos',ProductosRoutes)

// app.use('/books', IndexRoutes)


//static files
app.use(express.static(path.join(__dirname, 'public')))
