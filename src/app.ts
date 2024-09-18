import express, { Application } from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';
import { PORT } from './config';
import path from 'path';
import connectDB from './database';
import cors from 'cors';
import { addProductController, listProductsController } from './controllers/productController'

const app: Application = express();

// Conectar ao banco de dados
connectDB();

app.use(bodyParser.json());
// app.use(cors());
app.post('/', addProductController);

// app.use('/products', productRoutes);

// Serve arquivos estáticos da pasta public
//app.use(express.static(path.join(__dirname, '../public')));

// Rota para servir o HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;