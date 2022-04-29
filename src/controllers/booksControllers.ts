import { Response,Request } from "express";
import BookModel,{Book} from '../models/books';

class BooksController{
    public async index(req:Request, res:Response): Promise<void>{
        const books:Book[] = await BookModel.find({}).lean();
        res.render('books/index',{
            title:'Books',
            books
        });
    }
    public renderFormBooks(req:Request,res:Response):void {
        res.render('books/add',{
            title:'Add a Books'
        });
    }
    public async saveBook(req:Request, res:Response){
        const {title,author,isbn} = req.body;
        // es ambiguo puedo 
        const newbook:Book = new BookModel({title,author,isbn});
        await newbook.save();
        res.redirect('/books');
    }
}

export const booksController= new BooksController();