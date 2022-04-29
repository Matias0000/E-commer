import { Response,Request } from "express";
import productosModel,{Productos} from '../models/productos';

class ProductosController{
    public async index(req:Request, res:Response): Promise<void>{
        const Productos:Productos[] = await productosModel.find({}).lean();
        res.render('productos/index',{
            title:'Productos',
            Productos
        });
    }
    public renderFormBooks(req:Request,res:Response):void {
        res.render('productos/add',{
            title:'Add a Productos'
        });
    }
    public async saveBook(req:Request, res:Response){
        const {nombre,descripcion,codigo,thumbnail,precio,stock,timestamp,id} = req.body;
        // es ambiguo puedo 
        const newProducts:Productos = new productosModel({nombre,descripcion,codigo,thumbnail,precio,stock,timestamp,id});
        await newProducts.save();
        res.redirect('/productos');
    }
    public async updateProduct(req:Request,res:Response){
        const id = req.params

    }
    public async deleteProductos(req:Request, res:Response){
        const {id}= req.params;
        const productoDelete = await productosModel.findByIdAndRemove(id).lean();
        if(!productoDelete)return res.sendStatus(404);
        res.redirect('/productos');
    }
}

export const productosController= new ProductosController();