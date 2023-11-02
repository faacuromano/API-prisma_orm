import { Router } from 'express'
import productController from '../controllers/products.controller.js'

const router = Router()

router
    .get("/products", productController.getAll)

    .get("/products/:id", productController.getOne)
    
    .post("/products", productController.create)

    .delete("/products/:id", productController.deleteOne)

    .put("/products/:id", productController.update)

export default router