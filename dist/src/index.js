"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
// Para iniciar 
const app = (0, express_1.default)();
//configuradion
app.set('views', path_1.default.join(__dirname, 'views'));
app.engine('.hbs', (0, express_handlebars_1.default)({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: path_1.default.join(app.get('views'), '/layouts'),
    partialsDir: path_1.default.join(app.get('views'), '/partials'),
    helpers: require('./lib/helpers')
}));
app.set('view engine', 'hbs');
// app.engine('hbs', exphbs.engine({
//     extname: '.hbs',
//     defaultLayout: 'index.hbs',
//     layoutsDir: __dirname + '/views/layouts',
//     partialsDir: __dirname + '/views/partials',
//     defaultLayout: 'index',
//     extname: 'hbs',
// }))
//servidor que corre
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { console.log(`Servidor corriendo en puerto ${PORT}`); });
app.on('error', err => { console.log(`Algo salio mal: ${err}`); });
//middlewars
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Routes
//static files
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
