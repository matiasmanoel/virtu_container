"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductsController = exports.addProductController = void 0;
const productService_1 = require("../services/productService");
const addProductController = (req, res) => {
    try {
        (0, productService_1.createProduct)(req.body);
        res.status(201).send('Produto adicionado com sucesso!');
    }
    catch (error) {
        res.status(400).send('Erro ao adicionar produto');
    }
};
exports.addProductController = addProductController;
const listProductsController = (req, res) => {
    try {
        const products = (0, productService_1.listProducts)();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(400).send('Erro ao listar produtos');
    }
};
exports.listProductsController = listProductsController;
