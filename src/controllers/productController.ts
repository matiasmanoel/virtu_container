import { Request, Response } from 'express';
import { createProduct, listProducts } from '../services/productService';

export const addProductController = async (req: Request, res: Response) => {
  try {
    const {nome, descricao, valor} = req.body;

    if (!nome) throw new Error("Nome obrigatorio")
    if (typeof nome != "string") throw new Error("nome deve ser texto")
    if (!descricao) throw new Error("Descricao obrigatorio")
    if (typeof descricao != "string") throw new Error("Descricao deve ser em texto")
    if (!valor) throw new Error("Valor obrigatorio")
    if (typeof valor != "number") throw new Error("Valor deve ser numerico")
      
    const response = await createProduct(req.body);
    res.status(200).send(response)
  } catch (error: any) {
    console.log(error)
    res.send(error.message)
  }
};

export const listProductsController = async (req: Request, res: Response) => {
  try {
    const products = await listProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send('Erro ao listar produtos');
  }
};
