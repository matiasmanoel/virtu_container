"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var config_1 = require("./config");
var path_1 = require("path");
var database_1 = require("./database");
var productController_1 = require("./controllers/productController");
var app = (0, express_1.default)();
// Conectar ao banco de dados
(0, database_1.default)();
app.use(body_parser_1.default.json());
// app.use(cors());
app.post('/', productController_1.addProductController);
// app.use('/products', productRoutes);
// Serve arquivos estáticos da pasta public
//app.use(express.static(path.join(__dirname, '../public')));
// Rota para servir o HTML
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.listen(config_1.PORT, function () {
    console.log("Server is running on port ".concat(config_1.PORT));
});
exports.default = app;
