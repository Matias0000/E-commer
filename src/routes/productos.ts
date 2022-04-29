import express from  'express'
import { Router } from "express";


// const router = Router();

const app = express();

const router:Router= Router();
/* Pa poder probar se necesita poner el let admin=false o true */



import {productosController} from '../controllers/productosControllers';

router.get('/', productosController.index);
router.get('/add',productosController.renderFormBooks);
router.post('/add', productosController.saveBook);
router.get('/delete/:id',productosController.deleteProductos);



export default router;
// module.exports= router;