import { Router } from 'express';
import { addProductController, listProductsController } from '../controllers/productController';

const router: Router = Router();

router.post('/', addProductController);
router.get('/', listProductsController);

export default router;
