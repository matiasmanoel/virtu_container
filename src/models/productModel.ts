import mongoose, { Document, Schema } from 'mongoose';


export interface IProduct extends Document {
    //estatidco
    // _id?: number;

    nome: string;
    descricao: string;
    valor: number;
  }
  
 const productSchema: Schema = new Schema({
    name:{type: String, required: true},
    descricao:{type: String, required: true},
    valor:{type: Number, required: true},
 });

 const ProductModel = mongoose.model<IProduct>('Product', productSchema) 
 
 export default ProductModel;
 
 
 
 
 
 
 
 
 
 
//   // Simulação de um banco de dados em memória
//   let products: Product[] = [];
  
//   export const getProducts = (): Product[] => products;
//   export const addProduct = (product: Product): void => {
//     products.push(product);
//   };