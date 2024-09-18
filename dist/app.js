"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = require("./config");
const path_1 = __importDefault(require("path"));
const database_1 = __importDefault(require("./database"));
const productController_1 = require("./controllers/productController");
const app = (0, express_1.default)();
// Conectar ao banco de dados
(0, database_1.default)();
app.use(body_parser_1.default.json());
// app.use(cors());
app.post('/', productController_1.addProductController);
// app.use('/products', productRoutes);
// Serve arquivos estáticos da pasta public
//app.use(express.static(path.join(__dirname, '../public')));
// Rota para servir o HTML
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.listen(config_1.PORT, () => {
    console.log(`Server is running on port ${config_1.PORT}`);
});
exports.default = app;
