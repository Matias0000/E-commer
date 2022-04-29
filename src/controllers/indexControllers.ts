import {Request,Response} from 'express';

class IndexControllers{

    public index (req:Request,res:Response){
        res.render('index',{title:'Welcon productos app'});
    }


}

export const indexController =new IndexControllers();

// export default indexController;