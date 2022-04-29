import { Response,Request } from "express";
import CarritoModel,{Carrito} from '../models/carritos';
import BookModel,{Book} from '../models/books';

class CarritoController{
    public async index(req:Request, res:Response): Promise<void>{
        // const books:Book[] = await BookModel.find({}).lean();
        const carritos = await CarritoModel.find({}).lean();
        // console.log(carritos);
        res.render('carritos/index',{
            title:'Carritos',
            carritos
        });
    }
    public renderFormBooks(req:Request,res:Response):void {
        res.render('carritos/add',{
            title:'Add a cart'
        });
    }
    public async saveBook(req:Request, res:Response){
        const {nombre,timestamp,productos} = req.body;
        // es ambiguo puedo 
        const newkart:Carrito = new CarritoModel({nombre,timestamp,productos});
        await newkart.save();
        res.redirect('/carritos');
    }
}

export const carritoController= new CarritoController();