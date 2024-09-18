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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductsController = exports.addProductController = void 0;
const productService_1 = require("../services/productService");
const addProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nome, descricao, valor } = req.body;
        if (!nome)
            throw new Error("Nome obrigatorio");
        if (typeof nome != "string")
            throw new Error("nome deve ser texto");
        if (!descricao)
            throw new Error("Descricao obrigatorio");
        if (typeof descricao != "string")
            throw new Error("Descricao deve ser em texto");
        if (!valor)
            throw new Error("Valor obrigatorio");
        if (typeof valor != "number")
            throw new Error("Valor deve ser numerico");
        const response = yield (0, productService_1.createProduct)(req.body);
        res.status(200).send(response);
    }
    catch (error) {
        console.log(error);
        res.send(error.message);
    }
});
exports.addProductController = addProductController;
const listProductsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, productService_1.listProducts)();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(400).send('Erro ao listar produtos');
    }
});
exports.listProductsController = listProductsController;
