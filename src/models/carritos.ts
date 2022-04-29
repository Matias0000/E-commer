import mongoose, {Schema, model} from "mongoose";


export interface Carrito extends mongoose.Document{
    id:string;
    nombre:string;
    timestamp:string;
    productos:string;
}
const CarritoSchema =new Schema({
    id:String,
    nombre:String,
    timestamp:String,
    productos:String
})

export default model<Carrito>('Carrito',CarritoSchema)