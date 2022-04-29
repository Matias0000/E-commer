import mongoose, {Schema, model} from "mongoose";


export interface Productos extends mongoose.Document{
    nombre:string,
    descripcion: string,
    codigo: string,
    thumbnail: string,
    precio: number,
    stock: number,
    timestamp:string,
    id: number
}
const ProductoSchema =new Schema({
    nombre:String,
    descripcion: String,
    codigo: String,
    thumbnail: String,
    precio: String,
    stock: String,
    timestamp:String,
    id: String
},{versionKey:false})

export default model<Productos>('Productos',ProductoSchema)