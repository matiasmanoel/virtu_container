"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productController_1 = require("../controllers/productController");
var router = (0, express_1.Router)();
router.post('/', productController_1.addProductController);
router.get('/products', productController_1.listProductsController);
exports.default = router;
