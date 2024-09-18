import { Request, Response } from 'express';
import { createProduct, listProducts } from '../services/productService';

export const addProductController = (req: Request, res: Response): void => {
  try {
    createProduct(req.body);
    res.status(201).send('Produto adicionado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao adicionar produto');
  }
};

export const listProductsController = (req: Request, res: Response): void => {
  try {
    const products = listProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send('Erro ao listar produtos');
  }
};
