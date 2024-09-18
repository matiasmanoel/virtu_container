import { Router } from 'express';
import { addProductController, listProductsController } from '../controllers/productController';

const router: Router = Router();

router.post('/', addProductController);
router.get('/products', listProductsController);

export default router;
