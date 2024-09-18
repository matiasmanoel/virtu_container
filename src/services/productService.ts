import ProductModel, {IProduct} from "../models/productModel";


export const createProduct = async (product: IProduct): Promise<IProduct> => {
    try{
        const newProduct = new ProductModel(product);
        return await newProduct.save();
    }catch (error: unknown ){
        throw new Error('Error creating product: ' + error.message);
    }
};

export const listProducts = async ():Promise<IProduct[]> => {
    try{
        return await ProductModel.find().exec()
    }catch (error){
        throw new Error('Error listing products: ' + error.message)
    }
};













// // Simulação de um banco de dados em memória
// export const createProduct = (product: Product): void => {
//   addProduct(product);
// };

// export const listProducts = (): Product[] => {
//   return getProducts();
// };
