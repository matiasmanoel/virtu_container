"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProducts = exports.createProduct = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(product);
        const newProduct = new productModel_1.default(product);
        return yield newProduct.save();
    }
    catch (error) {
        console.log(error);
        throw new Error('Error creating product: ' + error.message);
    }
});
exports.createProduct = createProduct;
const listProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield productModel_1.default.find().exec();
    }
    catch (error) {
        throw new Error('Error listing products: ' + error.message);
    }
});
exports.listProducts = listProducts;
// // Simulação de um banco de dados em memória
// export const createProduct = (product: Product): void => {
//   addProduct(product);
// };
// export const listProducts = (): Product[] => {
//   return getProducts();
// };
