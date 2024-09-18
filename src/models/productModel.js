"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    valor: { type: Number, required: true },
});
var ProductModel = mongoose_1.default.model('Product', productSchema);
exports.default = ProductModel;
//   // Simulação de um banco de dados em memória
//   let products: Product[] = [];
//   export const getProducts = (): Product[] => products;
//   export const addProduct = (product: Product): void => {
//     products.push(product);
//   };
