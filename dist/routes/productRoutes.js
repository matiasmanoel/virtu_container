"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
const router = (0, express_1.Router)();
router.post('/', productController_1.addProductController);
router.get('/', productController_1.listProductsController);
exports.default = router;
