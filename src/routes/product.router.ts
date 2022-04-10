import { IProductDTO } from "@models/product.model";
import express from "express"
import { ProductsService } from "../services/product.service";

const router = express.Router();
const productsSvc = new ProductsService()

router.get('/', async (req, res) => {
  const products = await productsSvc.find()
  res.status(200).json(products)
  
});

router.get('/filter', (req, res, next) => {
  res.status(200).send('Yo soy un filter');
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await productsSvc.findOne(Number(id));
    res.status(200).json(product);
  } catch(err) {
    next(err)
  }
  
});

router.post('/', async (req, res) => {
  const body = req.body as IProductDTO;
  const newProduct = await productsSvc.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body as IProductDTO;
    const product = await productsSvc.update(Number(id), body);
    res.json(product);
  } catch (error: any) {
    res.status(404).json({
      message: error.message
    });
  }

});

router.delete('/:id', async (req, res, next) => {
  
  try {
    const { id } = req.params;
    await productsSvc.delete(Number(id))
    res.status(200).json({ message: "ok" });
  } catch (error) {
    next(error);
  }

});

export default router